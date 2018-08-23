import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CurrencyComponent } from './components/currency/currency.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';

const routes: Routes = [
  { path: '', component: CurrenciesComponent },
  { path: '#/currency/:id', component: CurrencyComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
