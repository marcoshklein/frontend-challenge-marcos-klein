import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ApiService, Country } from '../services/api.service';
import { IappState, loadCountries, setCountries, setSelectedContry } from '../store/app.state';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private nav: NavController,
    private api: ApiService,
    private store: Store<{app: IappState}>
  ) {}

  countries$ = this.store.select('app').pipe(
    map(app => app.countries)
  )

  ngOnInit(): void {
    this.store.dispatch(loadCountries());
  }

  goToDetail(country: Country) {
    this.store.dispatch(setSelectedContry({payload: country}) );
    this.nav.navigateForward('detail/' + country.code );
  }

}
