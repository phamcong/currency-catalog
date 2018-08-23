import { Injectable } from '@angular/core';
import { map, filter, scan } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(private http: HttpClient) { }

  getJSON(url: string): Observable<any> {
    return this.http.get(url);
  }
}
