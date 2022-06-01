import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap,  } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { IappState, loadHolidaysByCountry, setHolidays } from './app.state';

@Injectable({
  providedIn: 'root'
})
export class HolidayEffectService {

  constructor(
    private actions$: Actions,
    private api: ApiService,
    private store: Store<{ app: IappState }>
  ) { }

  loadHolidaysByCountry$ = createEffect(() => this.actions$.pipe(
    ofType(loadHolidaysByCountry),
    map(action => action.payload),
    switchMap(id =>
      this.api.getHolidays(id, '2022').pipe(
         map(res => setHolidays({payload: res.holidays}))
      )
    )
  )); 
}
