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
export class DataTableFileComponent {

  dataset: any[] = [
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
    {dataverse: 'UofA', dataset: 'sample test', author: 'John Smith', description: 'This is a sample test', filename: 'sample file', actions: 123},
  ];

  columns: any[] = [
    {data: "dataverse", readOnly: "true", title: "dataverse name"},
    {data: "dataset", readOnly: "true", title: "dataset name"},
    {data: "author", readOnly: "true", title: "dataset author"},
    {data: "description", readOnly: "true", title: "file description"},
    {data: "filename", readOnly: "true", title: "filename"},
    {data: "actions", readOnly: "true", title: "file count"}
  ]

}
