import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  url: string | undefined;

  constructor(private http: HttpClient) {}
  fetchTotalTagAmount(tag: string): Observable<any>{
    this.url = 'http://localhost:4000/data/total/amount/' + tag;
    return this.http.get(this.url);
  }
  fetchTotalTagPurchase(tag: string): Observable<any>{
    this.url = 'http://localhost:4000/data/total/amount/purchase/' + tag;
    return this.http.get(this.url);
  }
  fetchLatestOrders(amount: number): Observable<any>{
    this.url = 'http://localhost:4000/data/latest/orders/' + amount;
    return this.http.get(this.url);
  }
}
