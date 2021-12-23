import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from './city/city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  getCitys(): Observable<any> {
    return this.http.get("http://localhost:8082/api/funds")
  }

  getCity(id: number): Observable<any> {
    return this.http.get("http://localhost:8082/api/funds/" + id)
  }

  updateCity(city: City): Observable<any> {
    return this.http.patch(`http://localhost:8082/api/funds/${city.id}`, city)
  }

  deleteCity(city:any): Observable<any> {
    return this.http.delete(`http://localhost:8082/api/funds/${city.id}`, city)
  }

  addCity(city:City) {
    return this.http.post(`http://localhost:8082/api/funds`, city)
  }


}
