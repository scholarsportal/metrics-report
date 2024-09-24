import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-data-table-file',
  standalone: true,
  imports: [HotTableModule],
  template: `
  <div>
    <hot-table
      [data]="item"
      [colHeaders]="true"
      [colWidths]="[390,150,150,150,140,180,100,85,115,105]"
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
export class DataTableFileComponent {

  @Input() item = [];

  columns: any[] = [
    {data: "name", readOnly: "true", title: "Name"},
    {data: "file_type", readOnly: "true", title: "File Type"},
    {data: "reference", readOnly: "true", title: "Citation"},
    {data: "dataset_name", readOnly: "true", title: "Dataset name"},
    {data: "id", readOnly: "true", title: "Dataset id"},
    {data: "date", readOnly: "true", title: "Published Date"},
    {data: "size", readOnly: "true", type: "numeric", title: "Size(B)"},
    {data: "views", readOnly: "true", type: "numeric", title: "Views"},
    {data: "downloads", readOnly: "true", type: "numeric", title: "Downloads"},
    {data: "citations", readOnly: "true", type: "numeric", title: "Citations"}
  ]

}
