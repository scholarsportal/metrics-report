import { Component, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import {
  Chart,
  ChartConfiguration,
  ChartData
} from 'chart.js';
import { TranslocoService } from '@ngneat/transloco';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-horizontal-bar-graph',
  standalone: true,
  imports: [BaseChartDirective, MatIconModule],
  templateUrl: './horizontal-bar-graph.component.html',
  styleUrls: ['./horizontal-bar-graph.component.css']
})
export class HorizontalBarGraphComponent {

  @Input({ required: true })
  barChartData!: ChartData<'bar'>;

  constructor(private translocoService: TranslocoService) {}

  formatNumber(value: number | string): string {
    const lang = this.translocoService.getActiveLang();
    return Number(value).toLocaleString(
      lang === 'fr' ? 'fr-FR' : 'en-US',
      { useGrouping: true }
    );
  }

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        onClick: (e, legendItem, legend) => {
          const chart = legend.chart;
          const datasetIndex = legendItem.datasetIndex;
        
          if (datasetIndex === undefined) return;
        
          const visible = chart.isDatasetVisible(datasetIndex);
        
          chart.setDatasetVisibility(datasetIndex, !visible);
          chart.update();
        },
        labels: {
          generateLabels: (chartInstance) => {
            const original =
              Chart.defaults.plugins.legend.labels.generateLabels;
      
            const labels = original(chartInstance);
      
            return labels.map(label => {
              const datasetIndex = label.datasetIndex;
              if (datasetIndex === undefined) return label;
      
              const dataset = chartInstance.data.datasets[datasetIndex];
              const labelText = dataset.label ?? `Dataset ${datasetIndex + 1}`;
              const visible = chartInstance.isDatasetVisible(datasetIndex);
      
              return {
                ...label,
                text: `${labelText} ${visible ? '☑️' : '⬜'}`,
                hidden: false
              };
            });
          }
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || '';
            const value =
              context.parsed.y != null
                ? this.formatNumber(context.parsed.y)
                : '';

            return `${label}: ${value}`;
          }
        }
      }
    },
    scales: {
      x: { stacked: true,
        beginAtZero: false
         },
      y: {
        stacked: false,
        beginAtZero: false,
        ticks: {
          callback: (value) => this.formatNumber(value)
        }
      }
    }
  };
}
