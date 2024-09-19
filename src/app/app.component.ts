import {AfterViewInit, Component, ViewChild, NgModule, ChangeDetectionStrategy, ElementRef,OnInit} from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {JsonPipe} from '@angular/common';
import {AsyncPipe} from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatInputModule} from '@angular/material/input';
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {LineGraphComponent} from './line-graph/line-graph.component';
import {HorizontalBarGraphComponent } from './horizontal-bar-graph/horizontal-bar-graph.component';
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
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment, Moment} from 'moment';

registerAllModules();

const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [provideNativeDateAdapter()],
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
    PostsComponent
    ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit{

  readonly date = new FormControl(moment());

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value ?? moment();
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }

  options: string[] = ["(All)"];
  filteredOptions: Observable<string[]>;

  table_data = [];
  alias_data = [];
  downloads_graph_data: Array<any> = [];
  datasets_graph_data: Array<any> = [];
  files_graph_data: Array<any> = [];
  name_dropdown_data: Array<any> = [];

  barChartDataDownloads_data: Array<number> = [];
  barChartDataDownloads:Array<any> = [];

  barChartDataDatasets_data: Array<number> = [];
  barChartDataDatasets:Array<any> = [];
  
  barChartDataFiles_data: Array<number> = [];
  barChartDataFiles :Array<any> = [];

  barChartLabelsDownloads: Array<any> = [];
  barChartLabelsDatasets: Array<any> = [];
  barChartLabelsFiles: Array<any> = [];

  selectedCollection_Current:String = "(All)";
  selectedCollection_Activate:String = "(All)";

  dataset_table_data = [];

  getData(newItem: any) {
    this.table_data = newItem["DataverseTabData"]['table_data'];
    this.alias_data = newItem["DataverseTabData"]['alias_data'];
    this.downloads_graph_data = newItem["DataverseTabData"]['downloads_graph_data'];
    this.datasets_graph_data = newItem["DataverseTabData"]['datasets_graph_data'];
    this.files_graph_data = newItem["DataverseTabData"]['files_graph_data'];
    this.options = this.options.concat(newItem["DataverseTabData"]['name_dropdown_data']);
    this.barChartDataDownloads_data = this.downloads_graph_data.map(x => x.count);
    this.barChartLabelsDownloads = this.downloads_graph_data.map(x => x.month);
    this.barChartDataDatasets_data = this.datasets_graph_data.map(x => x.count);
    this.barChartLabelsDatasets = this.datasets_graph_data.map(x => x.month);
    this.barChartDataFiles_data = this.files_graph_data.map(x => x.count);
    this.barChartLabelsFiles = this.files_graph_data.map(x => x.month);

    this.dataset_table_data = newItem["DatasetTabData"]['table_data'];

    this.barChartDataDownloads = [
      { // grey
        data: this.barChartDataDownloads_data,
        label: 'Total Dataverse Downloads',
        tension: 0,
        backgroundColor: 'rgb(102, 0, 102, 0.5)',
        borderColor: 'rgb(102, 0, 102, 0.5)',
        pointBackgroundColor: 'rgb(102, 0, 102, 0.5)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(102, 0, 102, 0.5)'
      }
    ];

    this.barChartDataDatasets = [
      { // grey
        data: this.barChartDataDatasets_data, 
        label: 'Total Number of Datasets',
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
        data: this.barChartDataFiles_data, 
        label: 'Total Number of Files',
        tension: 0,
        backgroundColor: 'rgb(0, 189, 0, 0.5)',
        borderColor: 'rgb(0, 189, 0, 0.5)',
        pointBackgroundColor: 'rgb(0, 189, 0, 0.5)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(0, 189, 0, 0.5)'
      }
    ];
  
    
  }

  ngOnInit() {
  }

  selectedCollection(event: MatSelectChange) {
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
    console.log(this.selectedCollection_Activate);
  }

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['name', 'views', 'downloads', 'citations'];
  title = 'metrics-app';

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

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

}
