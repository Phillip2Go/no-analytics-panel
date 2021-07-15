import {Component, Input, OnInit} from '@angular/core';

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
  @Input() data = [];
  displayedColumns: string[] = ['trackId', 'productName', 'productTag', 'timeStamp'];
  dataSource = [];
  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.data;
  }
}
