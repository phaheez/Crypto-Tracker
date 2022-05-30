import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private selectedCurrency$ : BehaviorSubject<string> = new BehaviorSubject<string>("INR");

  constructor() { }

  public getCurrency(){
    return this.selectedCurrency$.asObservable();
  }

  public setCurrency(currency : string){
    this.selectedCurrency$.next(currency);
  }
}
