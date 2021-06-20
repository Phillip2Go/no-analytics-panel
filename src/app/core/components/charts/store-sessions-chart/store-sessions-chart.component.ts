import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import {DataService} from '../../../service/data.service';

@Component({
  selector: 'app-store-sessions-chart',
  templateUrl: './store-sessions-chart.component.html',
  styleUrls: ['./store-sessions-chart.component.scss']
})
export class StoreSessionsChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2020', '2021'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    {data: [65], label: 'Hip Hop'},
    {data: [59], label: 'Electro'},
    {data: [80], label: 'Rock'}
  ];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchTotalTagPurchase('hiphop', 0);
    this.fetchTotalTagPurchase('electro', 1);
    this.fetchTotalTagPurchase('rock', 2);
  }

  fetchTotalTagPurchase(tag: string, index: number): void {
    this.dataService.fetchTotalTagPurchase(tag).subscribe(
      response => {
        // @ts-ignore
        this.barChartData[index].data.push(response);
      }
    );
  }
}
