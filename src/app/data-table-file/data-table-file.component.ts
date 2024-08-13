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
      licenseKey="non-commercial-and-evaluation">
        <hot-column data="dataverse" [readOnly]="true" title="dataverse name"></hot-column>
        <hot-column data="dataset" [readOnly]="true" title="dataset name"></hot-column>
        <hot-column data="author" [readOnly]="true" title="dataset author"></hot-column>
        <hot-column data="description" [readOnly]="true" title="file description"></hot-column>
        <hot-column data="filename" [readOnly]="true" title="filename"></hot-column>
        <hot-column data="actions" [readOnly]="true" title="file count"></hot-column>
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

}
