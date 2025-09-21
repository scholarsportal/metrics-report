import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardHeader, MatCardTitleGroup, MatCardTitle, MatCardSubtitle, MatCardContent } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { DownloadComponent } from '../download/download.component';
import { InteractionService } from '../shared/interaction.service';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-value-export-dashboard',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardHeader, MatCardTitleGroup, MatCardTitle, MatCardSubtitle, MatCardContent, MatIcon, MatButtonModule, TranslocoModule, MatTooltipModule],
  templateUrl: './value-export-dashboard.component.html',
  styleUrl: './value-export-dashboard.component.css'
})
export class ValueExportDashboardComponent {
  @Input() data: any;
  @Input() selectedCollection_Activate_Name: string;
  @Input() date_start_on: string;

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
  total_size_num: String = "-"

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] || changes['date_start_on']) {
      this.processData(this.data);
    }
  }

  constructor(
    private translocoService: TranslocoService,
    private InteractionService: InteractionService
  ) {}

  processData(data: any) {
    console.log("give this a look", data)
    this.barChartDataDownloads_data = data['downloads_graph_data'];
    this.barChartDataDatasets_data = data['datasets_graph_data']
    this.barChartDataFiles_data = data['files_graph_data']
    this.barChartDataUsers_data = data['users_graph_data']
    this.barChartDataSize_data = data['size_graph_data']

    this.barChartDataDownloadsAgg_data = data['downloads_graph_agg_data']
    this.barChartDataDatasetsAgg_data = data['datasets_graph_agg_data']
    this.barChartDataFiles_Aggdata = data['files_graph_agg_data']
    this.barChartDataUsers_Aggdata = data['users_graph_agg_data']
    this.barChartDataSize_Aggdata = data['size_graph_agg_data']

    this.total_collections_num = data['name_dropdown_data'].length.toString() ?? 0; 
    if (this.selectedCollection_Activate_Name == "(All)"){
      this.total_dataverses_num = (data['dataverse_count'] - data['name_dropdown_data'].length).toString();
    }
    else {
      this.total_dataverses_num = data['dataverse_count']
    }
    if (this.date_start_on!=""){
      console.log("ds is activated here")
      this.total_datasets_num = this.barChartDataDatasetsAgg_data.reduce((a, b) => a + b, 0).toLocaleString();
      this.total_files_num = this.barChartDataFiles_Aggdata.reduce((a, b) => a + b, 0).toLocaleString();
      this.total_downloads_num = this.barChartDataDownloadsAgg_data.reduce((a, b) => a + b, 0).toLocaleString();
      this.total_users_num = this.barChartDataUsers_Aggdata.reduce((a, b) => a + b, 0).toLocaleString();
      const total = this.barChartDataSize_Aggdata?.reduce((a, b) => a + b, 0) ?? 0;
      this.total_size_num = total.toFixed(2).toLocaleString() + " GB";
    }
    else{
      this.total_datasets_num = this.barChartDataDatasets_data[this.barChartDataDatasetsAgg_data.length - 1].toLocaleString();
      this.total_files_num = this.barChartDataFiles_data[this.barChartDataDatasets_data.length - 1].toLocaleString();
      this.total_downloads_num = this.barChartDataDownloads_data[this.barChartDataDownloads_data.length - 1].toLocaleString();
      this.total_users_num = this.barChartDataUsers_data[this.barChartDataUsers_data.length - 1].toLocaleString();
      const total = this.barChartDataSize_data[this.barChartDataSize_data.length - 1] ?? 0;
      this.total_size_num = total.toFixed(2).toLocaleString(); 
    }

    console.log(this.total_datasets_num, this.total_files_num, this.total_downloads_num, this.total_users_num, this.total_size_num)
  }

  downloadExcel() {
    this.InteractionService.triggerGenerateExcel();
  }

  downloadPDF() {
    this.InteractionService.triggerGeneratePDF();
  }

}
