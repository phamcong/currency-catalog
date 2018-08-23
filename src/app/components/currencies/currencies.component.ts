import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../../services/currencies.service';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {
  currencies: any[];
  selectedCurrency: any[];

  constructor(
    public cs: CurrenciesService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.cs.getJSON('./../../assets/currencies.json')
      .subscribe(data => {
        this.currencies = data;
        console.log(data);
      });
    this.cs.currentCurrency.subscribe(currency => this.selectedCurrency = currency)
  }

  switchCurrency(currency: any) {
    this.cs.changeCurrency(currency);
    this.router.navigate([`#/currency/${currency.id}`]);
  }
}
