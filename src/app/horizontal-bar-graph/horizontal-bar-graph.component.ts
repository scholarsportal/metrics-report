import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import {
  Chart,
  ChartConfiguration,
  ChartData,
  ChartType,
} from 'chart.js';

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
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        stacked: false,
      },
      x: {
        stacked: true,
      },
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
