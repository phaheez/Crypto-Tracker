import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'https://api.coingecko.com/api/v3/coins';

  constructor(private httpClient: HttpClient) { }

  public getCurrency(currency:string){
    return this.httpClient.get<any>(`${this.baseUrl}/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`);
  }

  public getTrendingCurrency(currency:string){
    return this.httpClient.get<any>(`${this.baseUrl}/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
  }

  public getGraphicalCurrencyData(coinId:string, currency:string, days: number){
    return this.httpClient.get<any>(`${this.baseUrl}/${coinId}/market_chart?vs_currency=${currency}&days=${days}`)
  }

  public getCurrencyById(coinId:string){
    return this.httpClient.get<any>(`${this.baseUrl}/${coinId}`)
  }
}
