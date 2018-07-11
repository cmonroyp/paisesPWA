import { Component, OnInit } from '@angular/core';
//permite recibir parametros por rutas
import { ActivatedRoute } from '@angular/router';

//servicio 
import { CountryService } from '../../services/';

@Component({
  selector: 'app-countrydetail',
  templateUrl: './countrydetail.component.html',
  styles: []
})
export class CountrydetailComponent implements OnInit {

  detailCountry: Array<any> = [];
  constructor(private router: ActivatedRoute,
              private countryService: CountryService) { 

          this.router.params.subscribe(params =>{
            console.log(params['cod']);
            this.getDetailCountry(params['cod']);
        })
}

  ngOnInit() {
  }

  getDetailCountry(cod:string){

    this.countryService.getCountryDetail(cod)
       .subscribe(resp=>{
         console.log(resp);
         this.detailCountry = [resp];      
      })
  }

}
