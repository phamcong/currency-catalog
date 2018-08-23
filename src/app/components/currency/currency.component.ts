import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrenciesService } from '../../services/currencies.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  currency: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cs: CurrenciesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.currency = {};
    this.getCurrency();
  }

  getCurrency() {
    const currencyId = this.route.snapshot.paramMap.get('id');
    const currencyURL = `https://api.openfintech.io/v1/currencies/${currencyId}`;
    this.cs.getCurrency(currencyURL)
      .subscribe(res => {
        this.currency = res['data'];
        this.currency.mappedAttributes = Object.keys(this.currency.attributes)
          .map(key => ({name: key, value: this.currency.attributes[key]}));
      });
  }

  backToList() {
    this.location.back();
  }

}
