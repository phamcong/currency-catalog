import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { AppRoutingModule } from './app-routing.module';
import { CurrenciesService } from './services/currencies.service';

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CurrenciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
