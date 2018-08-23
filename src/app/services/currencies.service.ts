import { Injectable } from '@angular/core';
import { map, filter, scan } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {
  public currencies: any[];
  constructor(
    private http: HttpClient
  ) { }

  private currenciesSource = new BehaviorSubject([]);
  currentCurrency = this.currenciesSource.asObservable();

  changeCurrency(currency: any, currencies: any[]) {
    this.currencies = currencies;
    this.currenciesSource.next(currency);
  }
  getCurrencies(url: string): Observable<any> {
    return this.http.get(url);
  }
  getCurrency(url: string): Observable<any> {
    return this.http.get(url);
  }
}
