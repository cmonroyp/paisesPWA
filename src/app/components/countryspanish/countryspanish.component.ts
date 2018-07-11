import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//servicio 
import { CountryService } from '../../services/';
// import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-countryspanish',
  templateUrl: './countryspanish.component.html',
  styles: []
})
export class CountryspanishComponent implements OnInit {

  paises: Array<any> = [];
  constructor(private countryService: CountryService,
              private router: Router) { }

  ngOnInit() {
    this.getCountrys();
  }

  getCountrys(){
    this.countryService.getCountrys()
          .subscribe(resp=>{
             this.paises = resp;
             console.log(this.paises)
          })
  }

  verPais(cod: string){

    if(cod){
      this.router.navigate(['/country', cod]);
    }
  }

}
