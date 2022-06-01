import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { IappState, setHolidays } from '../store/app.state';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  contrieCode = '';
  
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private store: Store<{app : IappState}>
  ) {

  }

  holidays$ = this.store.select('app').pipe(
    map(app => app.holidays),
  );

  contry$ = this.store.select('app').pipe(
    map(app => app.selectedCountrie),
  );

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contrieCode = params.id;
      this.getHolidays();
      }
    );
  }

  getHolidays() {
    this.api.getHolidays(this.contrieCode, '2022').subscribe(res => {
      this.store.dispatch(setHolidays({payload: res.holidays}))
    })
  }

}
