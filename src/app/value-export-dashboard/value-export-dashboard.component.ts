import { Component, Input, SimpleChanges, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import {
  MatCard,
  MatCardHeader,
  MatCardTitleGroup,
  MatCardTitle,
  MatCardSubtitle,
  MatCardContent
} from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { DownloadComponent } from '../download/download.component';
import { InteractionService } from '../shared/interaction.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-value-export-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatIcon,
    MatButtonModule,
    TranslocoModule,
    MatTooltipModule
  ],
  templateUrl: './value-export-dashboard.component.html',
  styleUrl: './value-export-dashboard.component.css',
  providers: [DecimalPipe]
})
export class ValueExportDashboardComponent implements OnInit, OnDestroy {
  @Input() data: any;
  @Input() selectedCollection_Activate_Name: string;
  @Input() date_start_on: string;

  private langSub: Subscription;

  barChartDataDownloads_data: Array<number> = [];
  barChartDataDatasets_data: Array<number> = [];
  barChartDataFiles_data: Array<number> = [];
  barChartDataUsers_data: Array<number> = [];
  barChartDataSize_data: Array<number> = [];

  barChartDataDownloadsAgg_data: Array<number> = []; 
  barChartDataDatasetsAgg_data: Array<number> = [];
  barChartDataFiles_Aggdata: Array<number> = [];
  barChartDataUsers_Aggdata: Array<number> = [];
  barChartDataSize_Aggdata: Array<number> = [];

  pieChartDataSubject_data: Array<number> = [];
  pieChartLabelsSubject: Array<String> = [];
  pieChartDataSubject: Array<any> = [];

  pieChartDataFile_data: Array<number> = [];
  pieChartLabelsFile: Array<String> = [];
  pieChartDataFile: Array<any> = [];

  translatedText$: ""

  total_collections_num: String = "-";
  total_dataverses_num: String = "-";
  total_datasets_num: String = "-";
  total_files_num: String = "-"; 
  total_downloads_num: String = "-";
  total_users_num: String = "-";
  total_size_num: String = "-";

  constructor(
    private translocoService: TranslocoService,
    private interactionService: InteractionService,
    private decimalPipe: DecimalPipe
  ) {}

  ngOnInit() {
    // Watch for language changes and reprocess data
    this.langSub = this.translocoService.langChanges$.subscribe(() => {
      this.processData(this.data);
    });
  }

  ngOnDestroy() {
    this.langSub?.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] || changes['date_start_on']) {
      this.processData(this.data);
    }
  }

  private getCurrentLocale(): string {
    const lang = this.translocoService.getActiveLang();
    return lang === 'fr' ? 'fr-FR' : 'en-US';
  }

  private formatNumber(value: number): string {
    return this.decimalPipe.transform(value, '1.0-0', this.getCurrentLocale()) ?? '0';
  }

  private formatDecimal(value: number): string {
    return this.decimalPipe.transform(value, '1.2-2', this.getCurrentLocale()) ?? '0';
  }

  processData(data: any) {
    if (!data) return;

    this.barChartDataDownloads_data = data['downloads_graph_data'];
    this.barChartDataDatasets_data = data['datasets_graph_data'];
    this.barChartDataFiles_data = data['files_graph_data'];
    this.barChartDataUsers_data = data['users_graph_data'];
    this.barChartDataSize_data = data['size_graph_data'];

    this.barChartDataDownloadsAgg_data = data['downloads_graph_agg_data'];
    this.barChartDataDatasetsAgg_data = data['datasets_graph_agg_data'];
    this.barChartDataFiles_Aggdata = data['files_graph_agg_data'];
    this.barChartDataUsers_Aggdata = data['users_graph_agg_data'];
    this.barChartDataSize_Aggdata = data['size_graph_agg_data'];

    this.total_collections_num = this.formatNumber(data['name_dropdown_data']?.length ?? 0);

    if (this.selectedCollection_Activate_Name === "(All)") {
      const dataverses = data['dataverse_count'] - data['name_dropdown_data'].length;
      this.total_dataverses_num = this.formatNumber(dataverses);
    } else {
      this.total_dataverses_num = this.formatNumber(data['dataverse_count']);
    }

    if (this.date_start_on !== "") {
      const datasetsTotal = this.barChartDataDatasetsAgg_data.reduce((a, b) => a + b, 0);
      const filesTotal = this.barChartDataFiles_Aggdata.reduce((a, b) => a + b, 0);
      const downloadsTotal = this.barChartDataDownloadsAgg_data.reduce((a, b) => a + b, 0);
      const usersTotal = this.barChartDataUsers_Aggdata.reduce((a, b) => a + b, 0);
      const sizeTotal = this.barChartDataSize_Aggdata.reduce((a, b) => a + b, 0);

      this.total_datasets_num = this.formatNumber(datasetsTotal);
      this.total_files_num = this.formatNumber(filesTotal);
      this.total_downloads_num = this.formatNumber(downloadsTotal);
      this.total_users_num = this.formatNumber(usersTotal);
      this.total_size_num = this.formatDecimal(sizeTotal);
    } else {
      const lastIndex = this.barChartDataDatasets_data.length - 1;

      this.total_datasets_num = this.formatNumber(this.barChartDataDatasets_data[lastIndex] ?? 0);
      this.total_files_num = this.formatNumber(this.barChartDataFiles_data[lastIndex] ?? 0);
      this.total_downloads_num = this.formatNumber(this.barChartDataDownloads_data[lastIndex] ?? 0);
      this.total_users_num = this.formatNumber(this.barChartDataUsers_data[lastIndex] ?? 0);

      const size = this.barChartDataSize_data[lastIndex] ?? 0;
      this.total_size_num = this.formatDecimal(size);
    }
  }

  downloadExcel() {
    this.interactionService.triggerGenerateExcel();
  }

  downloadPDF() {
    this.interactionService.triggerGeneratePDF();
  }
}
