import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Permite peticiones http
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

//Rutas
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

//modulos
import { NavbarModule } from './shared';
import { environment } from '../environments/environment';

import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,  
    NavbarModule, ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }), 
    RouterModule,
    HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
