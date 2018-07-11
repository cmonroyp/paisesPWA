import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Permite peticiones http
import { HttpClientModule } from '@angular/common/http';
// import { MatToolbarModule } fro@angular/material/materialial';

import { AppComponent } from './app.component';
// import { CountryspanishComponent } from './components/countryspanish/countryspanish.component';
// import { HomeComponent } from './components/home/home.component';
// import { CountrydetailComponent } from './components/countrydetail/countrydetail.component';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//modulos
import { NavbarModule } from './shared';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,  
    NavbarModule, ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }), 
    RouterModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
