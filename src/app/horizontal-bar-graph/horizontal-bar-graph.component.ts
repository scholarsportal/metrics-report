import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import {
  Chart,
  ChartConfiguration,
  ChartData,
  ChartType,
  TooltipItem
} from 'chart.js';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-horizontal-bar-graph',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './horizontal-bar-graph.component.html',
  styleUrls: ['./horizontal-bar-graph.component.css']
})
export class HorizontalBarGraphComponent implements OnChanges {
  @Input() barChartData!: ChartData<'bar'>;

  barChartData_datasets: ChartData<'bar'>['datasets'] = [];
  barChartData_labels: ChartData<'bar'>['labels'] = [];

  constructor(private translocoService: TranslocoService) {}

  // 👇 Formatter that depends on active language
  formatNumber(value: number | string): string {
    const lang = this.translocoService.getActiveLang();

    return Number(value).toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-US', {
      useGrouping: true
    });
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          generateLabels: (chartInstance) => {
            const original = Chart.defaults.plugins.legend.labels.generateLabels;
            const labels = original(chartInstance);

            return labels.map(label => {
              const datasetIndex = label.datasetIndex;
              if (datasetIndex === undefined) return label;

              const dataset = chartInstance.data.datasets[datasetIndex];
              const isVisible = chartInstance.isDatasetVisible(datasetIndex);

              const labelText = dataset.label ?? `Dataset ${datasetIndex + 1}`;
              return {
                ...label,
                text: isVisible ? `${labelText} ✔️` : labelText,
              };
            });
          }
        }
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<'bar'>) => {
            const label = context.dataset.label || '';
            const value = context.parsed.y !== null ? this.formatNumber(context.parsed.y) : '';
            return `${label}: ${value}`;
          }
        }
      }
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: false,
        ticks: {
          callback: (value) => {
            return this.formatNumber(value);
          }
        }
      }
    }
  };

  public barChartLegend = true;
  public barChartType: ChartType = 'bar';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['barChartData'] && this.barChartData) {
      this.barChartData_datasets = this.barChartData.datasets;
      this.barChartData_labels = this.barChartData.labels;
    }
  }
}
