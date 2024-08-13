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
      [data]="dataset"
      [colHeaders]="true"
      [rowHeaders]="true"
      height="auto"
      licenseKey="non-commercial-and-evaluation">
        <hot-column data="dataset" [readOnly]="true" title="dataset name"></hot-column>
        <hot-column data="dataverse" [readOnly]="true" title="dataverse name"></hot-column>
        <hot-column data="actions" [readOnly]="true" title="file actions"></hot-column>
        <hot-column data="count" [readOnly]="true" title="file count"></hot-column>
    </hot-table>
  </div>
  `,
})
export class DataTableDatasetComponent {

  dataset: any[] = [
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10},
    {dataset: 'UofA', dataverse: 15000, actions: 300, count: 10}
  ];

}
