import { Component, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pie-graph',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './pie-graph.component.html',
  styleUrl: './pie-graph.component.css'
})
export class PieGraphComponent {
  @Input() pieChartLabels: Array<any>; 
  @Input() pieChartData: Array<any>;
  
  public pieChartOptions: ChartConfiguration['options'] = {
    devicePixelRatio: 1,
    responsive: false,
    plugins: {
      title: {
        display: true,
        text: 'Custom Chart Title',
    },
      legend: {
        position: "right",
        labels: { 
          textAlign: "left",
          padding: 1,
        }
    }
  }
}

  public pieChartLegend:boolean = true;
  public pieChartType: ChartType = "doughnut";

}
