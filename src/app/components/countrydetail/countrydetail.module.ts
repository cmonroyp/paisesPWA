import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//rutas 
import { CountryDetailRoutingModule } from './countrydetail.routing.module';

//componentes 
import { CountrydetailComponent } from './countrydetail.component';

//servicio 
import { CountryService } from '../../services/';

@NgModule({
  imports: [
    CommonModule,
    CountryDetailRoutingModule
  ],
  declarations: [CountrydetailComponent],
  providers: [CountryService]
})
export class CountrydetailModule { }
