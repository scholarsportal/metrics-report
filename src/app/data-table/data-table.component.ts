import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [HotTableModule],
  template: `
  <div>
    <hot-table
      [data]="dataset"
      [colHeaders]="true"
      [rowHeaders]="true"
      height="auto"
      [columnSorting]="true"
      [columns]="columns"
      licenseKey="non-commercial-and-evaluation">
    </hot-table>
  </div>
  `,
})
export class DataTableComponent {

  dataset: any[] = [
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

  columns: any[] = [
    {data: "name", readOnly: "true", title: "Collection"},
    {data: "views", readOnly: "true", title: "Views"},
    {data: "downloads", readOnly: "true", title: "Downloads"},
    {data: "citations", readOnly: "true", title: "Citations"},
  ]

}
