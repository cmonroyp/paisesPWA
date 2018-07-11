import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes
import { CountryspanishComponent } from './countryspanish.component';

//ruta
import { CountrySpanishRoutingModule } from './countryspanish.routing.module';

//servicio
// import { CountryService } from '../../services/country.service';
import { CountryService } from '../../services/';

@NgModule({
  imports: [
    CommonModule,
    CountrySpanishRoutingModule
  ],
  declarations: [CountryspanishComponent],
  providers: [CountryService]
})
export class CountryspanishModule { }
