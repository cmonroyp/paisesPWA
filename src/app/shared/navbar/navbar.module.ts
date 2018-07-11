import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes
import { NavbarComponent } from './navbar.component'; 

//rutas
import { NavbarRoutingModule } from './navbar.routing.module';

const module =[
  CommonModule,
  NavbarRoutingModule
]

@NgModule({
  imports: [
    ...module
  ],
  exports:[NavbarComponent],
  declarations: [NavbarComponent]
})
export class NavbarModule { }
