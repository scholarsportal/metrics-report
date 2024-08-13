import {AfterViewInit, Component, ViewChild, NgModule, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {JsonPipe} from '@angular/common';
import {AsyncPipe} from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {LineGraphComponent} from '../line-graph/line-graph.component';
import {HorizontalBarGraphComponent } from '../horizontal-bar-graph/horizontal-bar-graph.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {HotTableModule } from '@handsontable/angular';
import {registerAllModules } from 'handsontable/registry';
import {DataTableComponent } from '../data-table/data-table.component'; 
import {DataTableDatasetComponent} from '../data-table-dataset/data-table-dataset.component'; 
import {DataTableFileComponent} from '../data-table-file/data-table-file.component'; 
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-app-fr',
  standalone: true,
  imports: [MatTabsModule,
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
    MatDatepickerModule],
  templateUrl: './app-fr.component.html',
  styleUrl: './app-fr.component.css'
})
export class AppFrComponent implements AfterViewInit, OnInit{

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['name', 'views', 'downloads', 'citations'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  title = 'metrics-app';

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
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

barChartLabelsDownloads:Array<any> = ['Jun 2023', 'Jul 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 
  'Dec 2023', 'Jan 2024','Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024'];
barChartDataDownloads:Array<any> = [
    { // grey
      data: [70, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56], 
      label: 'Dataverse Downloads By Month',
      tension: 0,
      backgroundColor: 'rgb(102, 0, 102, 0.5)',
      borderColor: 'rgb(102, 0, 102, 0.5)',
      pointBackgroundColor: 'rgb(102, 0, 102, 0.5)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(102, 0, 102, 0.5)'
    }
  ];

barChartLabelsNumDatasets:Array<any> = ['Jun 2023', 'Jul 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 
  'Dec 2023', 'Jan 2024','Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024'];
barChartDataNumDatasets:Array<any> = [
    { // grey
      data: [70, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56], 
      label: 'Number of Datasets by Dataverse Collection',
      tension: 0,
      backgroundColor: 'rgb(0, 100, 255, 0.5)',
      borderColor: 'rgb(0, 100, 255, 0.5)',
      pointBackgroundColor: 'rgb(0, 100, 255, 0.5)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(0, 100, 255, 0.5)'
    }
  ];

barChartLabelsSize:Array<any> = ['Jun 2023', 'Jul 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 
  'Dec 2023', 'Jan 2024','Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024'];
barChartDataSize:Array<any> = [
    { // grey
      data: [70, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56], 
      label: 'Size of Dataverse Collections',
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

export interface Element {
  name: string;
  views: number;
  downloads: number;
  citations: number;
}

const dataset: any[] = [
  {id: 1, name: 'Ted Right', address: 'Wall Street'},
  {id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue'},
  {id: 3, name: 'Joan Well', address: 'Broadway'},
  {id: 4, name: 'Gail Polite', address: 'Bourbon Street'},
  {id: 5, name: 'Michael Fair', address: 'Lombard Street'},
  {id: 6, name: 'Mia Fair', address: 'Rodeo Drive'},
  {id: 7, name: 'Cora Fair', address: 'Sunset Boulevard'},
  {id: 8, name: 'Jack Right', address: 'Michigan Avenue'},
];

const ELEMENT_DATA: Element[] = [
  {name: 'UofA', views: 15000, downloads: 300, citations: 10},
  {name: 'UofB', views: 3223, downloads: 300, citations: 10},
  {name: 'UofC', views: 432432, downloads: 300, citations: 10},
  {name: 'UofD', views: 132231, downloads: 300, citations: 10},
  {name: 'UofE', views: 3434, downloads: 300, citations: 10},
  {name: 'UofF', views: 15435, downloads: 300, citations: 10},
  {name: 'UofG', views: 5435, downloads: 300, citations: 10},
  {name: 'UofH', views: 3231, downloads: 300, citations: 10},
  {name: 'UofI', views: 99434, downloads: 300, citations: 10},
  {name: 'UofJ', views: 434, downloads: 300, citations: 10},
  {name: 'UofK', views: 432, downloads: 300, citations: 10},
  {name: 'UofL', views: 4324, downloads: 300, citations: 10},
  {name: 'UofO', views: 4324234, downloads: 300, citations: 10},
  {name: 'UofM', views: 15000, downloads: 300, citations: 10},
  {name: 'UofN', views: 432, downloads: 300, citations: 10},
  {name: 'UofP', views: 432, downloads: 300, citations: 10},
  {name: 'UofQ', views: 15000, downloads: 300, citations: 10},
  {name: 'UofR', views: 5545, downloads: 300, citations: 10},
  {name: 'UofS', views: 432, downloads: 300, citations: 10},
  {name: 'UofT', views: 7547, downloads: 300, citations: 10},
  {name: 'UofU', views: 53532, downloads: 300, citations: 10},
  {name: 'UofV', views: 94981, downloads: 300, citations: 10},
  {name: 'UofW', views: 43241, downloads: 300, citations: 10},
  {name: 'UofX', views: 432409, downloads: 300, citations: 10},
  {name: 'UofY', views: 323232, downloads: 300, citations: 10},
  {name: 'UofZ', views: 13213, downloads: 300, citations: 10},

];

