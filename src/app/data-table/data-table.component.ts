import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [HotTableModule, AppComponent],
  template: `
  <div>
    <hot-table
      [data]="item"
      [colHeaders]="true"
      [colWidths]="[400,70,70,70]"
      [rowHeaders]="true"
      height="1000px"
      [columnSorting]="true"
      [columns]="columns"
      licenseKey="non-commercial-and-evaluation">
    </hot-table>
  </div>
  `,
})
export class DataTableComponent {

  @Input() item = [];

  columns: any[] = [
    {data: "name", readOnly: "true", title: "Collection"},
    {data: "views", readOnly: "true", type: "numeric", title: "Views"},
    {data: "downloads", readOnly: "true", type: "numeric", title: "Downloads"},
    {data: "citations", readOnly: "true", type: "numeric", title: "Citations"}
  ]
}
