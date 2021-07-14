import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  readonly TOTAL_TAG_AMOUNT = 'http://localhost:4000/data/total/amount/';
  readonly TOTAL_TAG_PURCHASE = 'http://localhost:4000/data/total/amount/purchase/';
  readonly LATEST_ORDERS = 'http://localhost:4000/data/latest/orders/';
  url: string | undefined;
  constructor(private http: HttpClient) {}
  fetchTotalTagAmount(tag: string): Observable<any>{
    this.url = this.TOTAL_TAG_AMOUNT + tag;
    return this.http.get(this.url);
  }
  fetchTotalTagPurchase(tag: string): Observable<any>{
    this.url = this.TOTAL_TAG_PURCHASE + tag;
    return this.http.get(this.url);
  }
  fetchLatestOrders(amount: number): Observable<any>{
    this.url = this.LATEST_ORDERS + amount;
    return this.http.get(this.url);
  }
}
