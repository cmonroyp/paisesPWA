import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes
import { NavbarComponent } from './navbar.component'; 

//rutas
import { NavbarRoutingModule } from './navbar.routing.module';

//ngx
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';

const module =[
  CommonModule,
  NavbarRoutingModule
]

@NgModule({
  imports: [
    ...module,
    NgProgressModule.forRoot(),
    NgProgressRouterModule
  ],
  exports:[NavbarComponent],
  declarations: [NavbarComponent]
})
export class NavbarModule { }
