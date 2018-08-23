import { Injectable } from '@angular/core';
import { map, filter, scan } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {
  constructor(
    private http: HttpClient
  ) { }

  private currenciesSource = new BehaviorSubject([]);
  currentCurrency = this.currenciesSource.asObservable();

  changeCurrency(currency: any) {
    this.currenciesSource.next(currency);
  }
  getJSON(url: string): Observable<any> {
    return this.http.get(url);
  }
}
