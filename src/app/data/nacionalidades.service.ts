import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NacionalidadesService {

  constructor(protected http: HttpClient) { }

  getNacionalidad() {
    return this.http.get('https://restcountries.eu/rest/v2/region/Americas');
  }
}
