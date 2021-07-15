import {Injectable} from '@angular/core';
import {DataService} from '../service/data.service';

@Injectable()
export class DashFacade {
  constructor(private dataService: DataService) {
  }
  getPieChartData(): any[] {
    const tags = ['hiphop', 'electro', 'rock'];
    const pieChartData: any[] = [];
    for (const tag of tags) {
      this.dataService.fetchTotalTagAmount(tag).subscribe(
        response => {
          pieChartData.push(response);
        }
      );
    }
    return pieChartData;
  }
  getBarChartData(): any[] {
    const tags = ['hiphop', 'electro', 'rock'];
    const barChartData = [
      {data: [65], label: 'Hip Hop'},
      {data: [59], label: 'Electro'},
      {data: [80], label: 'Rock'}
    ];
    tags.forEach((tag, index) => {
      this.dataService.fetchTotalTagPurchase(tag).subscribe(
        response => {
          barChartData[index].data.push(response);
        }
      );
    });
    return barChartData;
  }
  getTableData(numb: number): any[] {
    const tableData: any[] = [];
    let dataSource: any[] = [];
    this.dataService.fetchLatestOrders(numb).subscribe(
      response => {
        for (const val of response) {
          tableData.push(val);
        }
        dataSource = tableData;
      }
    );
    return dataSource;
  }
}



