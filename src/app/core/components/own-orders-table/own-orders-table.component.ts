import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';

export interface ProductElement {
  trackId: number;
  product: {
    productName: string;
    productTag: string;
  };
  timeStamp: string;
}

const ELEMENT_DATA: ProductElement[] = [
];

@Component({
  selector: 'app-own-orders-table',
  templateUrl: './own-orders-table.component.html',
  styleUrls: ['./own-orders-table.component.scss']
})
export class OwnOrdersTableComponent implements OnInit {
  displayedColumns: string[] = ['trackId', 'productName', 'productTag', 'timeStamp'];
  dataSource = [];
  data: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchLatestOrders(12);
  }

  fetchLatestOrders(amount: number): void {
    this.dataService.fetchLatestOrders(amount).subscribe(
      response => {
        this.data = response;
        for (const val of this.data) {
          ELEMENT_DATA.push(val);
        }
        // @ts-ignore
        this.dataSource = ELEMENT_DATA;
      }
    );
  }
}
