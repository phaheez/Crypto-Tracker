import { Component } from '@angular/core';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCurrency: string = 'INR';

  constructor(private currencyService : CurrencyService) { }

  sendCurency(event: string) {
    this.currencyService.setCurrency(event);
  }
}
