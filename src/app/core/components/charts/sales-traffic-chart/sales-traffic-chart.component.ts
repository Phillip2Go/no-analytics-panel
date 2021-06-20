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

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Hip Hop', 'Electro', 'Rock'];
  // @ts-ignore
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public chartColors: any[] = [
    {
      backgroundColor: ['#f498ac', '#80bee7', '#fee1a0', '#FFFCC4', '#B9E8E0']
    }];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.fetchTotalTagAmount('hiphop');
    this.fetchTotalTagAmount('electro');
    this.fetchTotalTagAmount('rock');
  }

  fetchTotalTagAmount(tag: string): void {
    this.dataService.fetchTotalTagAmount(tag).subscribe(
      response => {
        // console.log('fetchProducts()', response);
        this.pieChartData.push(response);
      }
    );
  }
}