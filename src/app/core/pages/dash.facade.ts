import {Injectable} from '@angular/core';
import {DataService} from '../service/data.service';
import {any} from 'codelyzer/util/function';

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
          // console.log('fetchProducts()', response);
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
          // barChartData.push(response);
          barChartData[index].data.push(response);
        }
      );
    });
    return barChartData;
  }
}



