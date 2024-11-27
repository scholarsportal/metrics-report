import {AfterViewInit, Component, ViewChild, NgModule, ChangeDetectionStrategy, ViewEncapsulation, ElementRef,OnInit, inject,} from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {JsonPipe, AsyncPipe, CommonModule} from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatInputModule} from '@angular/material/input';
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {LineGraphComponent} from './line-graph/line-graph.component';
import {HorizontalBarGraphComponent } from './horizontal-bar-graph/horizontal-bar-graph.component';
import { PieGraphComponent } from './pie-graph/pie-graph.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {HotTableModule } from '@handsontable/angular';
import {registerAllModules } from 'handsontable/registry';
import {DataTableComponent } from './data-table/data-table.component'; 
import {DataTableDatasetComponent} from './data-table-dataset/data-table-dataset.component'; 
import {DataTableFileComponent} from './data-table-file/data-table-file.component'; 
import {MatDatepickerModule, MatDatepicker} from '@angular/material/datepicker';
import { PostsComponent } from './posts/posts.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialog} from '@angular/material/dialog';
import { GenericTableComponent } from './generic-table/generic-table.component';
import {TranslateModule, TranslateService, TranslateStore} from '@ngx-translate/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DownloadComponent} from './download/download.component'; 
import {MatMenuModule} from '@angular/material/menu';
import html2canvas from 'html2canvas';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment, Moment} from 'moment';

registerAllModules();

const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM',
  },
  display: {
    dateInput: 'YYYY-MM',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [provideMomentDateAdapter(MY_FORMATS)],
  imports: [
    MatTabsModule,
    MatFormFieldModule, 
    MatSelectModule,
    MatInputModule, 
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    LineGraphComponent,
    HorizontalBarGraphComponent,
    PieGraphComponent,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    HotTableModule,
    JsonPipe,
    AsyncPipe,
    FormsModule,
    DataTableComponent,
    DataTableDatasetComponent,
    DataTableFileComponent,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatDatepicker,
    RouterModule,
    RouterOutlet,
    PostsComponent,
    CommonModule,
    MatCardModule,
    GenericTableComponent,
    MatCheckboxModule, 
    DownloadComponent
    ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit{

  start_on: boolean = false;
  date_start = new FormControl(moment());
  date_end = new FormControl(moment());
  date_String: String = this.dateStringFormat();  
  date_start_activate: string = "";
  date_end_activate: string = "";
  date_select_on = false; 
  todayDate:Date = new Date();
  minDate: Date = new Date("2016-02-01");


  setStartMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    this.date_start = new FormControl(moment());    const ctrlValue = this.date_start.value ?? moment();
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date_start.setValue(ctrlValue);
    datepicker.close();
  }

  setEndMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    this.dateStringFormat()
    const ctrlValue = this.date_end.value ?? moment();
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date_end.setValue(ctrlValue);
    datepicker.close();
  }

  submitDate(){
    const ctrlValue_s = this.date_start.value ?? moment();
    const ctrlValue_e = this.date_end.value ?? moment();
    const date_s = ctrlValue_s.format('YYYY-MM');
    const date_e = ctrlValue_e.format('YYYY-MM');

    this.date_start_activate = date_s;
    this.date_end_activate = date_e;
    this.date_select_on = true; 
  }

  dateStringFormat(): String{

    var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

    var dateString = ""; 

  if (this.start_on){
    const ctrlValue_s = this.date_start.value ?? moment();
    const year_s = ctrlValue_s.format('YYYY');
    const month_s = ctrlValue_s.format('MM');
    console.log(ctrlValue_s.format('YYYY'), ctrlValue_s.format('MM')) 
    const str_s = monthNames[parseInt(month_s)-1] + " " + year_s
    dateString = str_s; 
  }

  const ctrlValue_e = this.date_end.value ?? moment();
  const year_e = ctrlValue_e.format('YYYY');
  const month_e = ctrlValue_e.format('MM');
  console.log(ctrlValue_e.format('YYYY'), ctrlValue_e.format('MM')) 
  const str_e = monthNames[parseInt(month_e)-1] + " " + year_e
  
  return(dateString = dateString + " - " + str_e);

  }

  options: string[] = ["(All)"];
  filteredOptions: Observable<string[]>;

  table_data = [];
  alias_data = [];
  raw_table_data = {};
  subject_table = [];
  file_content_table = [];
  downloads_graph_data: Array<any> = [];
  datasets_graph_data: Array<any> = [];
  files_graph_data: Array<any> = [];
  users_graph_data: Array<any> = [];
  size_graph_data: Array<any> = [];
  name_dropdown_data: Array<any> = [];

  barChartDataDownloads_data: Array<number> = [];
  barChartDataDownloads:Array<any> = [];

  barChartDataDatasets_data: Array<number> = [];
  barChartDataDatasets:Array<any> = [];
  
  barChartDataFiles_data: Array<number> = [];
  barChartDataFiles:Array<any> = [];

  barChartDataUsers_data: Array<number> = [];
  barChartDataUsers:Array<any> = [];

  barChartDataSize_data: Array<number> = [];
  barChartDataSize:Array<any> = [];

  months = [];

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

  selectedCollection_Current: string = "(All)";
  selectedCollection_Activate: string = "(All)";
  selectedCollection_Current_Name: string = "(All)";
  selectedCollection_Activate_Name:String = "(All)";

  total_collections_num: String = "-";
  total_datasets_num: String = "-";
  total_downloads_num: String = "-";
  total_users_num: String = "-";
  total_size_num: String = "-"

  dataset_table_data = [];
  file_table_data = [];

  subjectTableOn = false;
  fileContentTableOn = false; 

  generic_columns: any[] = [
    {data: "name", readOnly: "true", title: "Collection / Dataverses"},
  ]
  subject_columns: any[] = [
    {data: "subject", readOnly: "true", title: "Subject"},
    {data: "count", readOnly: "true", title: "Count"},
    {data: "percent", readOnly: "true", title: "Distribution"},
  ]

  file_content_columns: any[] = [
    {data: "contenttype", readOnly: "true", title: "File Type"},
    {data: "count", readOnly: "true", title: "Count"},
    {data: "percent", readOnly: "true", title: "Distribution"},
  ]

  getData(newItem: any) {
    this.raw_table_data = newItem["DataverseTabData"];
    this.table_data = newItem["DataverseTabData"]['table_data'];
    this.alias_data = newItem["DataverseTabData"]['alias_data'];

    this.subject_table = newItem["DataverseTabData"]['subject_full_data'];
    this.file_content_table = newItem["DataverseTabData"]['file_content_full_data'];
    
    this.options = this.options.concat(newItem["DataverseTabData"]['name_dropdown_data']);

    this.months = newItem["DataverseTabData"]['months'];
    
    this.barChartDataDownloads_data = newItem["DataverseTabData"]['downloads_graph_data'];
    this.barChartDataDatasets_data = newItem["DataverseTabData"]['datasets_graph_data'];
    this.barChartDataFiles_data = newItem["DataverseTabData"]['files_graph_data'];
    this.barChartDataUsers_data = newItem["DataverseTabData"]['users_graph_data'];
    this.barChartDataSize_data = newItem["DataverseTabData"]['size_graph_data'];

    this.barChartDataDownloadsAgg_data = newItem["DataverseTabData"]['downloads_graph_agg_data']
    this.barChartDataDatasetsAgg_data = newItem["DataverseTabData"]['datasets_graph_agg_data']
    this.barChartDataFiles_Aggdata = newItem["DataverseTabData"]['files_graph_agg_data']
    this.barChartDataUsers_Aggdata = newItem["DataverseTabData"]['users_graph_agg_data']
    this.barChartDataSize_Aggdata = newItem["DataverseTabData"]['size_graph_agg_data']

    this.pieChartLabelsSubject = newItem["DataverseTabData"]['subject_label_data'];
    this.pieChartDataSubject_data = newItem["DataverseTabData"]['subject_data'];

    this.pieChartLabelsFile = newItem["DataverseTabData"]['file_content_label_data'];
    this.pieChartDataFile_data = newItem["DataverseTabData"]['file_content_data'];

    this.total_collections_num = newItem["DataverseTabData"]['name_dropdown_data'].length.toString(); 
    if (this.date_start_activate!=""){
      this.total_datasets_num = this.barChartDataDatasetsAgg_data.reduce((a, b) => a + b, 0).toString();
      this.total_downloads_num = this.barChartDataDownloadsAgg_data.reduce((a, b) => a + b, 0).toString();
      this.total_users_num = this.barChartDataUsers_Aggdata.reduce((a, b) => a + b, 0).toString();
      this.total_size_num = this.barChartDataSize_Aggdata.reduce((a, b) => a + b, 0).toFixed(2) .toString()+ "GB";
    }
    else{
      this.total_datasets_num = this.barChartDataDatasets_data[0].toString();
      this.total_downloads_num = this.barChartDataDownloads_data[0].toString();
      this.total_users_num = this.barChartDataUsers_data[0].toString();
      this.total_size_num = this.barChartDataSize_data[0].toFixed(2) .toString() + "GB"; 
    }

    this.barChartDataDownloads = [
      { // grey
        data: this.barChartDataDownloadsAgg_data,
        label: 'Monthly File Downloads',
        tension: 0,
        backgroundColor: 'rgb(102, 0, 102, 0.5)',
        borderColor: 'rgb(102, 0, 102, 0.5)',
        pointBackgroundColor: 'rgb(102, 0, 102, 0.5)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(102, 0, 102, 0.5)'
      },
      { // grey
        data: this.barChartDataDownloads_data,
        label: 'Cumulative File Downloads',
        tension: 0,
        backgroundColor: 'rgb(0, 100, 255, 0.5)',
        borderColor: 'rgb(0, 100, 255, 0.5)',
        pointBackgroundColor: 'rgb(0, 100, 255, 0.5)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(0, 100, 255, 0.5)'
      }
    ];

    this.barChartDataDatasets = [
      { // grey
        data: this.barChartDataDatasetsAgg_data,
        label: 'Monthly Datasets Published',
        tension: 0,
        backgroundColor: 'rgb(102, 0, 102, 0.5)',
        borderColor: 'rgb(102, 0, 102, 0.5)',
        pointBackgroundColor: 'rgb(102, 0, 102, 0.5)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(102, 0, 102, 0.5)'
      },
      { // grey
        data: this.barChartDataDatasets_data,
        label: 'Cumulative Datasets Published',
        tension: 0,
        backgroundColor: 'rgb(0, 100, 255, 0.5)',
        borderColor: 'rgb(0, 100, 255, 0.5)',
        pointBackgroundColor: 'rgb(0, 100, 255, 0.5)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(0, 100, 255, 0.5)'
      }
    ];

    this.barChartDataFiles = [
      { // grey
        data: this.barChartDataFiles_Aggdata,
        label: 'Monthly Files Published',
        tension: 0,
        backgroundColor: 'rgb(102, 0, 102, 0.5)',
        borderColor: 'rgb(102, 0, 102, 0.5)',
        pointBackgroundColor: 'rgb(102, 0, 102, 0.5)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(102, 0, 102, 0.5)'
      },
      { // grey
        data: this.barChartDataFiles_data,
        label: 'Cumulative Files Published',
        tension: 0,
        backgroundColor: 'rgb(0, 100, 255, 0.5)',
        borderColor: 'rgb(0, 100, 255, 0.5)',
        pointBackgroundColor: 'rgb(0, 100, 255, 0.5)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(0, 100, 255, 0.5)'
      }
    ];

    this.barChartDataUsers = [
      { // grey
        data: this.barChartDataUsers_Aggdata,
        label: 'Monthly Users Joined',
        tension: 0,
        backgroundColor: 'rgb(102, 0, 102, 0.5)',
        borderColor: 'rgb(102, 0, 102, 0.5)',
        pointBackgroundColor: 'rgb(102, 0, 102, 0.5)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(102, 0, 102, 0.5)'
      },
      { // grey
        data: this.barChartDataUsers_data,
        label: 'Cumulative Users Joined',
        tension: 0,
        backgroundColor: 'rgb(0, 100, 255, 0.5)',
        borderColor: 'rgb(0, 100, 255, 0.5)',
        pointBackgroundColor: 'rgb(0, 100, 255, 0.5)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(0, 100, 255, 0.5)'
      }
    ];

    this.barChartDataSize = [
      { // grey
        data: this.barChartDataSize_Aggdata,
        label: 'Monthly Storage Used (GB)',
        tension: 0,
        backgroundColor: 'rgb(102, 0, 102, 0.5)',
        borderColor: 'rgb(102, 0, 102, 0.5)',
        pointBackgroundColor: 'rgb(102, 0, 102, 0.5)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(102, 0, 102, 0.5)'
      },
      { // grey
        data: this.barChartDataSize_data,
        label: 'Cumulative Storage Used (GB)',
        tension: 0,
        backgroundColor: 'rgb(0, 100, 255, 0.5)',
        borderColor: 'rgb(0, 100, 255, 0.5)',
        pointBackgroundColor: 'rgb(0, 100, 255, 0.5)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(0, 100, 255, 0.5)'
      }
    ];

    this.pieChartDataSubject = [
        {
          data: this.pieChartDataSubject_data, 
          label: 'Subject Breakdown',
        }
    ];

    this.pieChartDataFile = [
      {
        data: this.pieChartDataFile_data, 
        label: 'File Content Breakdown'
      }
  ];

    console.log(this.pieChartDataSubject);
    
  }

  ngOnInit(): void {
    /*
    const defaultLange = localStorage.getItem('language') || 'en'; 
    this.translateService.setDefaultLang(defaultLange);
    this.translateService.use(defaultLange);
    */
  }

  changeLanguage(lang: string){
    /*
    this.translateService.use(lang)
    localStorage.setItem('language', lang);
    */
  }

  selectedCollection(event: MatSelectChange) {
    this.selectedCollection_Current_Name = event.value;
    if (event.value == "(All)"){
      this.selectedCollection_Current = "(All)"
    }
    else {
    for (let i = 0; i <= this.alias_data.length; i++){
      if (this.alias_data[i]['name'] == event.value){
        this.selectedCollection_Current = this.alias_data[i]['alias']
      }
    }
    }
    console.log(event.value);
  }

  selectedDate(eventData: any, dp?:any) {
    console.log(eventData);
    console.log(dp)
  }

  CollectionDataButtonActivate(){
    this.selectedCollection_Activate = this.selectedCollection_Current;
    this.selectedCollection_Activate_Name = this.selectedCollection_Current_Name;
    this.submitDate();
    this.date_String = this.dateStringFormat();  
    console.log(this.selectedCollection_Activate);
  }

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['name', 'views', 'downloads', 'citations'];
  title = 'metrics-app';

  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) {}

  ngAfterViewInit() {
  }

  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }

  } 

  openAboutDialog() {
    this.dialog.open(AboutDialog);
  }

  subjectToggle() {
    if (this.subjectTableOn){this.subjectTableOn = false}
    else {this.subjectTableOn = true} 
  }

  defaultButton(){
    window.location.reload();
  }

}

@Component({
  selector: 'about-dialog-popup',
  templateUrl: 'about-dialog-popup.html',
})

export class AboutDialog {}
