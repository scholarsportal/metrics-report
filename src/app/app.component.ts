import {AfterViewInit, Component, ViewChild, NgModule, ChangeDetectionStrategy, ViewEncapsulation, ElementRef,OnInit, inject, signal} from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {JsonPipe, AsyncPipe, CommonModule} from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import {Observable} from 'rxjs';
import {map, startWith, take} from 'rxjs/operators';
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
import { TreeComponent } from './tree/tree.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialog} from '@angular/material/dialog';
import { GenericTableComponent } from './generic-table/generic-table.component';
import {TranslateModule, TranslateService, TranslateStore} from '@ngx-translate/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DownloadComponent} from './download/download.component'; 
import {MatMenuModule} from '@angular/material/menu';
import html2canvas from 'html2canvas';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { ChartData } from 'chart.js';
import { LanguageService } from './language.service';
import { MatListModule } from '@angular/material/list';
import { ChangeDetectorRef } from '@angular/core';
import { forkJoin } from 'rxjs';



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

interface SearchGroup {
  letter: string;
  names: string[];
}

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
    MatMenuModule,
    RouterModule,
    RouterOutlet,
    PostsComponent,
    TreeComponent,
    CommonModule,
    MatCardModule,
    GenericTableComponent,
    MatCheckboxModule, 
    DownloadComponent,
    MatTooltipModule,
    TranslocoModule,
    MatListModule,
    ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit{

  private _formBuilder = inject(FormBuilder);

  start_on: boolean = false;
  date_start = new FormControl(moment());
  date_end = new FormControl(moment());
  date_String: String = this.dateStringFormat();  
  date_start_activate: string = "";
  date_end_activate: string = "";
  date_select_on = false; 
  todayDate:Date = new Date();
  minDate: Date = new Date("2016-02-01");
  bad_range: boolean = false;

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
    console.log(ctrlValue_s, ctrlValue_e)
    const date_s = ctrlValue_s.format('YYYY-MM');
    const date_e = ctrlValue_e.format('YYYY-MM');

    if (!this.start_on){
      this.date_start_activate = "";
      console.log(this.date_start_activate)
    }

    this.bad_range = false;

    if (this.start_on && date_s > date_e){
      this.bad_range = true;
    }

    if (this.start_on && !this.bad_range){
      this.date_start_activate = date_s;
      this.date_end_activate = date_e;
      this.date_select_on = true; 
    }

    if (!this.start_on && !this.bad_range){
      this.date_end_activate = date_e;
      this.date_select_on = true; 
    }

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

  @ViewChild('input') input: ElementRef<HTMLInputElement>;
  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions: string[];
  selectedOption: string = "(All)";

  searchForm = this._formBuilder.group({
    searchGroup: '',
  });

  searchGroups: SearchGroup[] = [
    {
      letter: 'Default',
      names: ["(All)"],
    },
    {
      letter: 'Sub Dataverses',
      names: [],
    },
    {
      letter: 'Collections',
      names: [],
    }
  ]

  searchGroupOptions: Observable<SearchGroup[]>;

  table_data: Array<any> = [];;
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

  subject_columns:Array<any> = [];

  file_content_columns:Array<any> = [];

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
  selectedCollection_Activate_Name: string = "(All)";

  translatedText$: ""


  total_collections_num: String = "-";
  total_dataverses_num: String = "-";
  total_datasets_num: String = "-";
  total_files_num: String = "-"; 
  total_downloads_num: String = "-";
  total_users_num: String = "-";
  total_size_num: String = "-"

  total_collections_change: String = "-";
  total_datasets_change: String = "-";
  total_files_chnage: String = "-"; 
  total_downloads_change: String = "-";
  total_users_change: String = "-";
  total_size_change: String = "-"

  downloads_labels = [this.translocoService.selectTranslate('MonthlyFileDownloads'), this.translocoService.selectTranslate('CumulativeFileDownloads')];
  datasets_labels = [this.translocoService.selectTranslate('MonthlyDatasetsPublished'), this.translocoService.selectTranslate('CumulativeDatasetsPublished')];
  file_labels = [this.translocoService.selectTranslate('MonthlyFilePublished'), this.translocoService.selectTranslate('CumulativeFilePublished')];
  user_labels = [this.translocoService.selectTranslate('MonthlyUsersJoined'), this.translocoService.selectTranslate('CumulativeUsersJoined')];
  storage_usage = [this.translocoService.selectTranslate('MonthlyStorageUsed'), this.translocoService.selectTranslate('CumulativeStorageUsed')];

  dataset_table_data = [];
  file_table_data = [];

  subjectTableOn = false;
  fileContentTableOn = false; 

  receivedCollectionFromTree:Array<String> = [];
  

  isOpen = false;

  generic_columns: any[] = [
    {data: "name", readOnly: "true", title: "Collection / Dataverses"},
  ]

  getData(newItem: any) {
    this.raw_table_data = newItem["DataverseTabData"];
    this.table_data = newItem["DataverseTabData"]['table_data'];
    this.alias_data = newItem["DataverseTabData"]['alias_data'];

    this.subject_table = newItem["DataverseTabData"]['subject_full_data'];
    this.file_content_table = newItem["DataverseTabData"]['file_content_full_data'];
    
    this.options = this.options.concat(newItem["DataverseTabData"]['name_dropdown_data'].sort());

    this.searchGroups[2].names = this.options;
    if (this.selectedCollection_Current == "(All)"){
      this.searchGroups[1].names = [];
    }
    else {
      this.searchGroups[1].names = this.table_data.map(a => a.name);
    }

    console.log(this.searchGroups); 
  
    this.months = newItem["DataverseTabData"]['months'];
    
    this.barChartDataDownloads_data = newItem["DataverseTabData"]['downloads_graph_data'].reverse();
    this.barChartDataDatasets_data = newItem["DataverseTabData"]['datasets_graph_data'].reverse();
    this.barChartDataFiles_data = newItem["DataverseTabData"]['files_graph_data'].reverse();
    this.barChartDataUsers_data = newItem["DataverseTabData"]['users_graph_data'].reverse();
    this.barChartDataSize_data = newItem["DataverseTabData"]['size_graph_data'].reverse();

    this.barChartDataDownloadsAgg_data = newItem["DataverseTabData"]['downloads_graph_agg_data'].reverse()
    this.barChartDataDatasetsAgg_data = newItem["DataverseTabData"]['datasets_graph_agg_data'].reverse()
    this.barChartDataFiles_Aggdata = newItem["DataverseTabData"]['files_graph_agg_data'].reverse()
    this.barChartDataUsers_Aggdata = newItem["DataverseTabData"]['users_graph_agg_data'].reverse()
    this.barChartDataSize_Aggdata = newItem["DataverseTabData"]['size_graph_agg_data'].reverse()

    this.pieChartLabelsSubject = newItem["DataverseTabData"]['subject_label_data'];
    this.pieChartDataSubject_data = newItem["DataverseTabData"]['subject_data'];

    this.pieChartLabelsFile = newItem["DataverseTabData"]['file_content_label_data'];
    this.pieChartDataFile_data = newItem["DataverseTabData"]['file_content_data'];

    this.total_collections_num = newItem["DataverseTabData"]['name_dropdown_data'].length.toString(); 
    if (this.selectedCollection_Activate_Name == "(All)"){
      this.total_dataverses_num = (newItem["DataverseTabData"]['dataverse_count'] - newItem["DataverseTabData"]['name_dropdown_data'].length).toString();
    }
    else {
      this.total_dataverses_num = newItem["DataverseTabData"]['dataverse_count']
    }
    if (this.date_start_activate!=""){
      console.log("ds is activated here")
      this.total_datasets_num = this.barChartDataDatasetsAgg_data.reduce((a, b) => a + b, 0).toLocaleString();
      this.total_files_num = this.barChartDataFiles_Aggdata.reduce((a, b) => a + b, 0).toLocaleString();
      this.total_downloads_num = this.barChartDataDownloadsAgg_data.reduce((a, b) => a + b, 0).toLocaleString();
      this.total_users_num = this.barChartDataUsers_Aggdata.reduce((a, b) => a + b, 0).toLocaleString();
      this.total_size_num = this.barChartDataSize_Aggdata.reduce((a, b) => a + b, 0).toFixed(2).toLocaleString(); + "GB";
    }
    else{
      this.total_datasets_num = this.barChartDataDatasets_data[0].toLocaleString();
      this.total_files_num = this.barChartDataFiles_data[0].toLocaleString();
      this.total_downloads_num = this.barChartDataDownloads_data[0].toLocaleString();
      this.total_users_num = this.barChartDataUsers_data[0].toLocaleString();
      this.total_size_num = this.barChartDataSize_data[0].toFixed(2).toLocaleString() + "GB"; 
    }

    this.total_collections_change = (((this.barChartDataDatasets_data[0] - this.barChartDataDatasets_data[1]) / this.barChartDataDatasets_data[1]) * 100).toFixed(2).toString() + "%"
    //total_datasets_change: String = "-";
    //total_files_chnage: String = "-"; 
    //total_downloads_change: String = "-";
    //total_users_change: String = "-";
    //total_size_change: String = "-"

    type Translations = {
      [key: string]: string;
    };

    type TranslationsMap = { [key: string]: string };

    this.translocoService.selectTranslateObject([
      'MonthlyFileDownloads',
      'MonthlyDatasetsPublished',
      'MonthlyFilePublished',
      'MonthlyUsersJoined',
      'MonthlyStorageUsed',
      'CumulativeFileDownloads',
      'CumulativeDatasetsPublished',
      'CumulativeFilePublished',
      'CumulativeUsersJoined',
      'CumulativeStorageUsed',
      "Subject",
      "Count",
      "Distribution",
      "FileType",
      "SpecificFileType"
    ]).subscribe(([
      MonthlyFileDownloads,
      MonthlyDatasetsPublished,
      MonthlyFilePublished,
      MonthlyUsersJoined,
      MonthlyStorageUsed,
      CumulativeFileDownloads,
      CumulativeDatasetsPublished,
      CumulativeFilePublished,
      CumulativeUsersJoined,
      CumulativeStorageUsed,
      Subject,
      Count,
      Distribution,
      FileType,
      SpecificFileType
    ]) => {

      const labels = this.months.reverse();
      
      // Your labels array (e.g. months reversed)
      const barChartLabels = this.months.reverse();

      // Your bar chart data with labels + datasets
      this.barChartDataDownloads = {
        labels: barChartLabels,
        datasets: [
          {
            data: this.barChartDataDownloadsAgg_data,
            label: 'Monthly File Downloads',
            backgroundColor: 'rgba(102, 0, 102, 0.5)',
            borderColor: 'rgba(102, 0, 102, 0.5)',
            hoverBackgroundColor: 'rgba(102, 0, 102, 0.7)',
            hoverBorderColor: 'rgba(102, 0, 102, 0.7)'
          },
          {
            data: this.barChartDataDownloads_data,
            label: 'Cumulative File Downloads',
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
            label: 'Monthly Datasets Published',
            backgroundColor: 'rgba(102, 0, 102, 0.5)',
            borderColor: 'rgba(102, 0, 102, 0.5)',
            hoverBackgroundColor: 'rgba(102, 0, 102, 0.7)',
            hoverBorderColor: 'rgba(102, 0, 102, 0.7)'
          },
          {
            data: this.barChartDataDatasets_data,
            label: 'Cumulative Datasets Published',
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
            label: 'Monthly File Published',
            backgroundColor: 'rgba(102, 0, 102, 0.5)',
            borderColor: 'rgba(102, 0, 102, 0.5)',
            hoverBackgroundColor: 'rgba(102, 0, 102, 0.7)',
            hoverBorderColor: 'rgba(102, 0, 102, 0.7)'
          },
          {
            data: this.barChartDataFiles_data,
            label: 'Cumulative File Published',
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
            label: 'Monthly Users Joined',
            backgroundColor: 'rgba(102, 0, 102, 0.5)',
            borderColor: 'rgba(102, 0, 102, 0.5)',
            hoverBackgroundColor: 'rgba(102, 0, 102, 0.7)',
            hoverBorderColor: 'rgba(102, 0, 102, 0.7)'
          },
          {
            data: this.barChartDataUsers_data,
            label: 'Cumulative Users Joined',
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
            label: 'Monthly Storage Used',
            backgroundColor: 'rgba(102, 0, 102, 0.5)',
            borderColor: 'rgba(102, 0, 102, 0.5)',
            hoverBackgroundColor: 'rgba(102, 0, 102, 0.7)',
            hoverBorderColor: 'rgba(102, 0, 102, 0.7)'
          },
          {
            data: this.barChartDataSize_data,
            label: 'Cumulative Storage Used',
            backgroundColor: 'rgba(0, 100, 255, 0.5)',
            borderColor: 'rgba(0, 100, 255, 0.5)',
            hoverBackgroundColor: 'rgba(0, 100, 255, 0.7)',
            hoverBorderColor: 'rgba(0, 100, 255, 0.7)'
          }
        ]
      };


      this.subject_columns = [
        {data: "subject", readOnly: "true", title: Subject},
        {data: "count", readOnly: "true", title: Count},
        {data: "percent", readOnly: "true", title: Distribution},
      ]
    
      this.file_content_columns= [
        {data: "type", readOnly: "true", title: FileType},
        {data: "contenttype", readOnly: "true", title: SpecificFileType},
        {data: "count", readOnly: "true", title: Count},
        {data: "percent", readOnly: "true", title: Distribution},
      ]
    });
    

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
    this.searchGroupOptions = this.searchForm.get('searchGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value || '')),
    );
  }

  private _filterGroup(value: string): SearchGroup[] {
    if (value) {
      return this.searchGroups
        .map(group => ({letter: group.letter, names: this._filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.searchGroups;
  }

  _filter = (opt: string[], value: string): string[] => {
    const filterValue = value.toLowerCase();
  
    return opt.filter(item => item.toLowerCase().includes(filterValue));
  };

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

  getCollectionFromTree(list: string[]) {
    if (list.includes("(All)")){
      this.selectedCollection_Activate = "(All)"
      this.selectedCollection_Activate_Name = "(All)"
    }

    else {
    this.receivedCollectionFromTree = list;
    console.log(list)
    this.selectedCollection_Current = list[1]
      this.selectedCollection_Current_Name = list[0]
    this.selectedCollection_Activate = this.selectedCollection_Current; 
    this.selectedCollection_Activate_Name = this.selectedCollection_Current_Name;
    }
    this.submitDate();
    this.date_String = this.dateStringFormat();  
}

  selectedDate(eventData: any, dp?:any) {
    console.log(eventData);
    console.log(dp)
  }

  CollectionDataButtonActivate(){
    //console.log(this.searchForm.get('searchGroup')?.value);
    //this.selectedOption = this.searchForm.get('searchGroup')?.value as string; 
    this.selectedOption = this.selectedCollection_Current_Name;
    var acceptable_collection = false;
    if (this.selectedOption == "(All)" ){
      this.selectedCollection_Current = "(All)"
      this.selectedCollection_Current_Name = "(All)"
      acceptable_collection = true;
    }
    else{
    for (let i = 0; i < this.alias_data.length; i++){
      if (this.alias_data[i]['name'] === this.selectedOption){
        console.log(this.alias_data[i]['alias'])
        this.selectedCollection_Current = this.alias_data[i]['alias'];
        this.selectedCollection_Current_Name = this.selectedOption;
        acceptable_collection = true;
      }
    }
    }
    if (acceptable_collection){
      this.selectedCollection_Activate = this.selectedCollection_Current; 
      this.selectedCollection_Activate_Name = this.selectedCollection_Current_Name;
      this.submitDate();
      this.date_String = this.dateStringFormat();  
      console.log(this.selectedCollection_Activate);
    }
  }

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['name', 'views', 'downloads', 'citations'];
  title = 'metrics-app';
  

  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog, private languageService: LanguageService, private translocoService: TranslocoService, private cdr: ChangeDetectorRef) {
    this.filteredOptions = this.options.slice();
  }

  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
  }

  switchLanguage(language: string) {
    this.languageService.switchLanguage(language);
    this.cdr.detectChanges();
    this.cdr.markForCheck();
  }

  getLanguage(){
    return this.languageService.getLanguage();
    this.cdr.detectChanges();
    this.cdr.markForCheck();
  }

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
