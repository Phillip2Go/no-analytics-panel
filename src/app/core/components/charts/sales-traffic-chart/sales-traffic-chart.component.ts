import {Component, Input, OnInit} from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import {DataService} from '../../../service/data.service';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-sales-traffic-chart',
  templateUrl: './sales-traffic-chart.component.html',
  styleUrls: ['./sales-traffic-chart.component.scss']
})
export class SalesTrafficChartComponent implements OnInit {
  @Input() data = [];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Hip Hop', 'Electro', 'Rock'];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public chartColors: any[] = [
    {
      backgroundColor: ['#f498ac', '#80bee7', '#fee1a0']
    }];

  constructor() {
  }

  ngOnInit(): void {
    this.pieChartData = this.data;
  }
}
