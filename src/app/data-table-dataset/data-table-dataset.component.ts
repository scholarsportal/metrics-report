import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-data-table-dataset',
  standalone: true,
  imports: [HotTableModule],
  template: `
  <div>
    <hot-table
      [data]="item"
      [colHeaders]="true"
      [colWidths]="[390,150,150,150,140,180,85,115,105]"
      [rowHeaders]="true"
      height="10000px"
      [columnSorting]="true"
      [columns]="columns"
      [dropdownMenu]="['filter_by_value', 'filter_action_bar']"
      [filters]="true"
      licenseKey="non-commercial-and-evaluation">
    </hot-table>
  </div>
  `,
})
export class DataTableDatasetComponent {

  @Input() item = [];

  columns: any[] = [
    {data: "name", readOnly: "true", title: "Title"},
    {data: "author", readOnly: "true", title: "Author"},
    {data: "dataverse_name", readOnly: "true", title: "Dataverse"},
    {data: "subject", readOnly: "true", title: "Subject"},
    {data: "date", readOnly: "true", title: "Published Date"},
    {data: "id", readOnly: "true", title: "ID"},
    {data: "views", readOnly: "true", type: "numeric", title: "Views"},
    {data: "downloads", readOnly: "true", type: "numeric", title: "Downloads"},
    {data: "citations", readOnly: "true", type: "numeric", title: "Citations"}
  ]

}
