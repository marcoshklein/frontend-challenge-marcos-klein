import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { IappState, loadCountries, setCountries, successLoadCountries } from './app.state';

@Injectable({
  providedIn: 'root'
})
export class CountriesEffectService {

  constructor(
    private actions$: Actions,
    private api: ApiService,
    private store: Store<{ app: IappState }>
  ) { }

  loadCountries = createEffect(
    () => this.actions$.pipe(
      ofType(loadCountries),
      withLatestFrom(
        this.store.select('app').pipe(
          map(app => app.countries)
        )
      ),
      switchMap(([_, countries]) => {
        if (countries.length === 0) {
          return this.api.getCountries().pipe(
            tap(res => this.store.dispatch(setCountries({ payload: res.countries }))),
            map(() => successLoadCountries())
          )
        }
        return of(successLoadCountries());
      }
      )
    ))
}
