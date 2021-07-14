import {Component, Input, OnInit} from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType, PluginServiceGlobalRegistration } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import {DataService} from '../../../service/data.service';

@Component({
  selector: 'app-store-sessions-chart',
  templateUrl: './store-sessions-chart.component.html',
  styleUrls: ['./store-sessions-chart.component.scss']
})
export class StoreSessionsChartComponent implements OnInit {
  @Input() data = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2020', '2021'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [<PluginServiceGlobalRegistration> pluginDataLabels];

  public barChartData: ChartDataSets[] = [
  ];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.barChartData = this.data;
  }
}
