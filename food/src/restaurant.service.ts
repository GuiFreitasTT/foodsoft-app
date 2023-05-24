import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) {}

  getDados(): Observable<any> {
    const url = 'http://localhost:8080/restaurants';
    return this.http.get<any>(url);
  }

}
