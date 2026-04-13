import { Component, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { TranslocoService } from '@ngneat/transloco';
import { Output, EventEmitter } from '@angular/core';
import * as pattern from 'patternomaly';

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
  @Input() width: any;
  @Input() height: any; 

  constructor(private translocoService: TranslocoService) {}

  public pieChartLegend:boolean = true;
  public pieChartType: ChartType = "doughnut";
  
  public pieChartOptions: ChartConfiguration['options'] = {
    devicePixelRatio: 1,
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
        text: 'Custom Chart Title',
      },
      legend: {
        position: "right",
        labels: {
          textAlign: "left",
          padding: 0.5,
        
          generateLabels: (chart) => {
            const original =
              Chart.overrides.doughnut.plugins.legend.labels.generateLabels(chart);
          
            const dataset: any = chart.data.datasets[0];
            const values = dataset?.data ?? [];
          
            // Total only for visible slices
            const totalVisible = values.reduce((sum: number, value: number, index: number) => {
              return chart.getDataVisibility(index) ? sum + value : sum;
            }, 0);
          
            const MAX_LABEL_LENGTH = 40; // tweak this based on your layout
          
            original.forEach((label) => {
              const index = label.index as number;
              const visible = chart.getDataVisibility(index);
              const value = values[index] ?? 0;
          
              const lang = this.translocoService.getActiveLang();
          
              const percent = visible
                ? totalVisible
                  ? new Intl.NumberFormat(lang, {
                      style: 'percent',
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1
                    }).format(value / totalVisible)
                  : "- %"
                : "- %";
          
              const percentText = ` (${percent})`;
          
              let baseText = label.text ?? '';
          
              // Reserve space for percent so it never gets cut
              const maxBaseLength = MAX_LABEL_LENGTH - percentText.length;
          
              if (baseText.length > maxBaseLength) {
                baseText = baseText.slice(0, Math.max(0, maxBaseLength - 3)) + '...';
              }
          
              label.text = `${baseText}${percentText}`;
            });
          
            return original;
          }
        }
      }
    }
  };

}