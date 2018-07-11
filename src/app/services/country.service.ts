import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class AppSettings{
    public static get API_ENDPOIND(): string{
        return 'https://restcountries.eu/rest/v2';
    }
}

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountrys(){
    return this.http.get(`${AppSettings.API_ENDPOIND}/lang/es`)
                .pipe(
                  map((resp:any)=> resp)
                )
  }

  getCountryDetail(cod:string){
    return this.http.get(`${AppSettings.API_ENDPOIND}/alpha/${cod}`);
  }
}
