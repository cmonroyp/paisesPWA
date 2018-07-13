import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//servicio 
import { CountryService } from '../../services/';
import { NgProgress } from '@ngx-progressbar/core';
// import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-countryspanish',
  templateUrl: './countryspanish.component.html',
  styles: []
})
export class CountryspanishComponent implements OnInit {

  paises: Array<any> = [];

  startedClass = false;
  completedClass = false;
  preventAbuse = false;

  constructor(private countryService: CountryService,
              private router: Router,
              ) { 
                }
              

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

  onStarted() {
    this.startedClass = true;
    setTimeout(() => {
      this.startedClass = false;
    }, 800);
  }

  onCompleted() {
    this.completedClass = true;
    setTimeout(() => {
      this.completedClass = false;
    }, 800);
  }

  verPais(cod: string){

    if(cod){
      this.router.navigate(['/country', cod]);
    }
  }

}
