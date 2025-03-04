import { Component, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar-graph',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './horizontal-bar-graph.component.html',
  styleUrl: './horizontal-bar-graph.component.css'
})
export class HorizontalBarGraphComponent {
  @Input() barChartLabels: Array<any>; 
  @Input() barChartData: Array<any>;

  public barChartOptions: ChartConfiguration['options'] = {
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        stacked: false,
      },
      x: {
        stacked: true,
      },
    }
  }

  public barChartLegend:boolean = true;
  public barChartType: ChartType = "bar";

}
