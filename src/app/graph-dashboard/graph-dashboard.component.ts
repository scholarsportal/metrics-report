import { Component, Input, SimpleChanges } from '@angular/core';
import { HorizontalBarGraphComponent } from '../horizontal-bar-graph/horizontal-bar-graph.component';
import { PieGraphComponent } from '../pie-graph/pie-graph.component';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { GenericTableComponent } from '../generic-table/generic-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ChartData } from 'chart.js';
import { DownloadComponent } from '../download/download.component';
import { InteractionService } from '../shared/interaction.service';

@Component({
  selector: 'app-graph-dashboard',
  standalone: true,
  imports: [
    HorizontalBarGraphComponent,
    PieGraphComponent,
    TranslocoModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    GenericTableComponent,
    DownloadComponent
  ],
  templateUrl: './graph-dashboard.component.html',
  styleUrls: ['./graph-dashboard.component.css']
})
export class GraphDashboardComponent {
  @Input() data: any;
  @Input() selectedCollection_Activate_Name: string;

  subject_table = [];
  file_content_table = [];
  downloads_graph_data: Array<any> = [];
  datasets_graph_data: Array<any> = [];
  files_graph_data: Array<any> = [];
  users_graph_data: Array<any> = [];
  size_graph_data: Array<any> = [];
  name_dropdown_data: Array<any> = [];

  barChartDataDownloadsAgg_data: Array<number> = [];
  barChartDataDatasetsAgg_data: Array<number> = [];
  barChartDataFiles_Aggdata: Array<number> = [];
  barChartDataUsers_Aggdata: Array<number> = [];
  barChartDataSize_Aggdata: Array<number> = [];

  pieChartDataSubject_data: Array<number> = [];
  pieChartLabelsSubject: Array<string> = [];
  pieChartDataSubject: Array<any> = [];

  pieChartDataFile_data: Array<number> = [];
  pieChartLabelsFile: Array<string> = [];
  pieChartDataFile: Array<any> = [];

  barChartDataDownloads_data: Array<number> = [];
  barChartDataDownloads: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  barChartDataDatasets_data: Array<number> = [];
  barChartDataDatasets: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  barChartDataFiles_data: Array<number> = [];
  barChartDataFiles: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  barChartDataUsers_data: Array<number> = [];
  barChartDataUsers: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  barChartDataSize_data: Array<number> = [];
  barChartDataSize: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  subject_columns: Array<any> = [];
  file_content_columns: Array<any> = [];
  months = [];

  downloads_labels: string[] = [];
  datasets_labels: string[] = [];
  file_labels: string[] = [];
  user_labels: string[] = [];
  storage_usage: string[] = [];

  subjectTranslations: { [key: string]: string } = {};

  fileTranslations: { [key: string]: string } = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.processData(this.data);
    }
  }

  constructor(
    private translocoService: TranslocoService,
    private InteractionService: InteractionService
  ) {}

  processData(data: any) {
    console.log('yoyoyo', data);

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

    this.pieChartLabelsSubject = data['subject_label_data'];
    this.pieChartDataSubject_data = data['subject_data'];

    this.pieChartLabelsFile = data['file_content_label_data'];
    this.pieChartDataFile_data = data['file_content_data'];

    this.subject_table = data['subject_full_data'];
    this.file_content_table = data['file_content_full_data'];

    this.months = data['months'];

    this.translocoService
      .selectTranslateObject([
        'MonthlyFileDownloads',
        'MonthlyDatasetsPublished',
        'MonthlyFilePublished',
        'MonthlyUsersJoined',
        'MonthlyAuthorsRegistered',
        'MonthlyStorageUsed',
        'CumulativeFileDownloads',
        'CumulativeDatasetsPublished',
        'CumulativeFilePublished',
        'CumulativeUsersJoined',
        'CumulativeAuthorsRegistered',
        'CumulativeStorageUsed',
        'Subject',
        'Count',
        'Distribution',
        'FileType',
        'SpecificFileType',
        "SocialSciences",
        "EarthandEnvironmentalSciences",
        "Other",
        "MedicineHealthandLifeSciences",
        "ArtsandHumanities",
        "Engineering",
        "AgriculturalSciences",
        "ComputerandInformationScience",
        "Physics",
        "Chemistry",
        "BusinessandManagement",
        "Law",
        "MathematicalSciences",
        "AstronomyandAstrophysics",
        "image",
        "text",
        "application",
        "video",
        "audio",
        "model",
        "type",
        "chemical",
        "biosequence",
        "multipart"
      ])
      .subscribe(
        ([
          MonthlyFileDownloads,
          MonthlyDatasetsPublished,
          MonthlyFilePublished,
          MonthlyUsersJoined,
          MonthlyAuthorsRegistered,
          MonthlyStorageUsed,
          CumulativeFileDownloads,
          CumulativeDatasetsPublished,
          CumulativeFilePublished,
          CumulativeUsersJoined,
          CumulativeAuthorsRegistered,
          CumulativeStorageUsed,
          Subject,
          Count,
          Distribution,
          FileType,
          SpecificFileType,
          SocialSciences,
          EarthandEnvironmentalSciences,
          Other,
          MedicineHealthandLifeSciences,
          ArtsandHumanities,
          Engineering,
          AgriculturalSciences,
          ComputerandInformationScience,
          Physics,
          Chemistry,
          BusinessandManagement,
          Law,
          MathematicalSciences,
          AstronomyandAstrophysics,
          image,
          text,
          application,
          video,
          audio,
          model,
          type,
          chemical,
          biosequence,
          multipart
        ]) => {

          const subjectTranslationMap: { [key: string]: string } = {
            'Social Sciences': SocialSciences,
            'Earth and Environmental Sciences': EarthandEnvironmentalSciences,
            'Other': Other,
            'Medicine, Health and Life Sciences': MedicineHealthandLifeSciences,
            'Arts and Humanities': ArtsandHumanities,
            'Engineering': Engineering,
            'Agricultural Sciences': AgriculturalSciences,
            'Computer and Information Science': ComputerandInformationScience,
            'Physics': Physics,
            'Chemistry': Chemistry,
            'Business and Management': BusinessandManagement,
            'Law': Law,
            'Mathematical Sciences': MathematicalSciences,
            'Astronomy and Astrophysics': AstronomyandAstrophysics
          };

          const fileTranslationMap: { [key: string]: string } = {
            "image": image,
            "text": text,
            "application": application,
            "video": video,
            "audio": audio,
            "model": model,
            "type": type,
            "chemical": chemical,
            "biosequence": biosequence,
            "multipart": multipart,
          };

          this.subject_table = data['subject_full_data'].map((item: any) => {
            return {
              ...item,
              subject: subjectTranslationMap[item.subject] || item.subject
            };
          });

          this.pieChartLabelsSubject = data['subject_label_data'].map((label: string) => {
            return subjectTranslationMap[label] || label;
          });
          
          this.file_content_table = data['file_content_full_data'].map((item: any) => {
            return {
              ...item,
              type: fileTranslationMap[item.type] || item.type
            };
          });

          this.pieChartLabelsFile = data['file_content_label_data'].map((label: string) => {
            return fileTranslationMap[label] || label;
          });

          // Assign translated labels here
          this.downloads_labels = [MonthlyFileDownloads, CumulativeFileDownloads];
          this.datasets_labels = [MonthlyDatasetsPublished, CumulativeDatasetsPublished];
          this.file_labels = [MonthlyFilePublished, CumulativeFilePublished];
          //this.user_labels = this.selectedCollection_Activate_Name === "(All)" ? [MonthlyUsersJoined, CumulativeUsersJoined]: [MonthlyAuthorsRegistered, CumulativeAuthorsRegistered];
          this.user_labels = [MonthlyUsersJoined, CumulativeUsersJoined];
          this.storage_usage = [MonthlyStorageUsed, CumulativeStorageUsed];

          // Bar chart labels
          const barChartLabels = this.months;

          this.barChartDataDownloads = {
            labels: barChartLabels,
            datasets: [
              {
                data: this.barChartDataDownloadsAgg_data,
                label: MonthlyFileDownloads,
                backgroundColor: 'rgba(102, 0, 102, 0.5)',
                borderColor: 'rgba(102, 0, 102, 0.5)',
                hoverBackgroundColor: 'rgba(102, 0, 102, 0.7)',
                hoverBorderColor: 'rgba(102, 0, 102, 0.7)'
              },
              {
                data: this.barChartDataDownloads_data,
                label: CumulativeFileDownloads,
                backgroundColor: 'rgba(0, 100, 255, 0.5)',
                borderColor: 'rgba(0, 100, 255, 0.5)',
                hoverBackgroundColor: 'rgba(0, 100, 255, 0.7)',
                hoverBorderColor: 'rgba(0, 100, 255, 0.7)'
              }
            ]
          };

          this.barChartDataDatasets = {
            labels: barChartLabels,
            datasets: [
              {
                data: this.barChartDataDatasetsAgg_data,
                label: MonthlyDatasetsPublished,
                backgroundColor: 'rgba(102, 0, 102, 0.5)',
                borderColor: 'rgba(102, 0, 102, 0.5)',
                hoverBackgroundColor: 'rgba(102, 0, 102, 0.7)',
                hoverBorderColor: 'rgba(102, 0, 102, 0.7)'
              },
              {
                data: this.barChartDataDatasets_data,
                label: CumulativeDatasetsPublished,
                backgroundColor: 'rgba(0, 100, 255, 0.5)',
                borderColor: 'rgba(0, 100, 255, 0.5)',
                hoverBackgroundColor: 'rgba(0, 100, 255, 0.7)',
                hoverBorderColor: 'rgba(0, 100, 255, 0.7)'
              }
            ]
          };

          this.barChartDataFiles = {
            labels: barChartLabels,
            datasets: [
              {
                data: this.barChartDataFiles_Aggdata,
                label: MonthlyFilePublished,
                backgroundColor: 'rgba(102, 0, 102, 0.5)',
                borderColor: 'rgba(102, 0, 102, 0.5)',
                hoverBackgroundColor: 'rgba(102, 0, 102, 0.7)',
                hoverBorderColor: 'rgba(102, 0, 102, 0.7)'
              },
              {
                data: this.barChartDataFiles_data,
                label: CumulativeFilePublished,
                backgroundColor: 'rgba(0, 100, 255, 0.5)',
                borderColor: 'rgba(0, 100, 255, 0.5)',
                hoverBackgroundColor: 'rgba(0, 100, 255, 0.7)',
                hoverBorderColor: 'rgba(0, 100, 255, 0.7)'
              }
            ]
          };

          this.barChartDataUsers = {
            labels: barChartLabels,
            datasets: [
              {
                data: this.barChartDataUsers_Aggdata,
                label: this.user_labels[0],
                backgroundColor: 'rgba(102, 0, 102, 0.5)',
                borderColor: 'rgba(102, 0, 102, 0.5)',
                hoverBackgroundColor: 'rgba(102, 0, 102, 0.7)',
                hoverBorderColor: 'rgba(102, 0, 102, 0.7)'
              },
              {
                data: this.barChartDataUsers_data,
                label: this.user_labels[1],
                backgroundColor: 'rgba(0, 100, 255, 0.5)',
                borderColor: 'rgba(0, 100, 255, 0.5)',
                hoverBackgroundColor: 'rgba(0, 100, 255, 0.7)',
                hoverBorderColor: 'rgba(0, 100, 255, 0.7)'
              }
            ]
          };

          this.barChartDataSize = {
            labels: barChartLabels,
            datasets: [
              {
                data: this.barChartDataSize_Aggdata,
                label: MonthlyStorageUsed,
                backgroundColor: 'rgba(102, 0, 102, 0.5)',
                borderColor: 'rgba(102, 0, 102, 0.5)',
                hoverBackgroundColor: 'rgba(102, 0, 102, 0.7)',
                hoverBorderColor: 'rgba(102, 0, 102, 0.7)'
              },
              {
                data: this.barChartDataSize_data,
                label: CumulativeStorageUsed,
                backgroundColor: 'rgba(0, 100, 255, 0.5)',
                borderColor: 'rgba(0, 100, 255, 0.5)',
                hoverBackgroundColor: 'rgba(0, 100, 255, 0.7)',
                hoverBorderColor: 'rgba(0, 100, 255, 0.7)'
              }
            ]
          };

          this.subject_columns = [
            { data: 'subject', readOnly: 'true', title: Subject },
            { data: 'count', readOnly: 'true', title: Count },
            { data: 'percent', readOnly: 'true', title: Distribution }
          ];

          this.file_content_columns = [
            { data: 'type', readOnly: 'true', title: FileType },
            { data: 'contenttype', readOnly: 'true', title: SpecificFileType },
            { data: 'count', readOnly: 'true', title: Count },
            { data: 'percent', readOnly: 'true', title: Distribution }
          ];
        }
      );

    this.pieChartDataSubject = [
      {
        data: this.pieChartDataSubject_data,
        label: 'Subject Breakdown'
      }
    ];

    this.pieChartDataFile = [
      {
        data: this.pieChartDataFile_data,
        label: 'File Content Breakdown'
      }
    ];

    console.log('yoyoyoyoyo', this.barChartDataDownloads);
  }

  downloadSubject() {
    this.InteractionService.triggerGenerateSubject();
  }

  downloadFile() {
    this.InteractionService.triggerGenerateFile();
  }
}
