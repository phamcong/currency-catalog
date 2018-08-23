import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../../services/currencies.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {
  currencies: any[];

  constructor(public cs: CurrenciesService) { }

  ngOnInit() {
    this.cs.getJSON('./../../assets/currencies.json')
      .subscribe(data => {
        this.currencies = data;
        console.log(data);
      });
    console.log(this.currencies);
  }
}
