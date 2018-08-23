import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrenciesService } from '../../services/currencies.service';

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
    private cs: CurrenciesService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(par => {
        const currencyId = par['id'];
      });
    this.cs.currentCurrency.subscribe(currency => this.currency = currency);
    this.currency.mappedAttributes = Object.keys(this.currency.attributes).map(key => ({name: key, value: this.currency.attributes[key]}));
    console.log(this.currency.mappedAttributes);
  }

  backToList() {
    this.router.navigate([``]);
  }

}
