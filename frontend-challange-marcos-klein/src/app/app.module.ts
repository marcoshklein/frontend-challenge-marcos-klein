import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { appReducer } from './store/app.state';
import { EffectsModule } from '@ngrx/effects';
import { CountriesEffectService } from './store/countries-effect.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    HttpClientModule, 
    AppRoutingModule, 
    StoreModule.forRoot({ app : appReducer }), 
    EffectsModule.forRoot([CountriesEffectService]),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
