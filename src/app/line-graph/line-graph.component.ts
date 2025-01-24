import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-line-graph',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './line-graph.component.html',
  styleUrl: './line-graph.component.css'
})
export class LineGraphComponent {

  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        position: 'left',
      },
      y1: {
        position: 'right',
        grid: {
          color: 'grey',
        },
        ticks: {
          color: 'black',
        },
      },
    },
  }
  public lineChartData:Array<any> = [
    { // purple 
      data: [65, 59, 80, 81, 56, 55, 40], 
      label: 'Open',
      tension: 0,
      backgroundColor: 'rgb(102, 0, 102, 0.5)',
      borderColor: 'rgb(102, 0, 102, 0.5)',
      pointBackgroundColor: 'rgb(102, 0, 102, 0.5)'
    },
    { // blue
      data: [18, 48, 77, 9, 100, 27, 40], 
      label: 'Licensed',
      tension: 0,
      backgroundColor: 'rgb(0, 100, 255, 0.5)',
      borderColor: 'rgb(0, 100, 255, 0.5)',
      pointBackgroundColor: 'rgb(0, 100, 255, 0.5)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType: ChartType = "line";

}
