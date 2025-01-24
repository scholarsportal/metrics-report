import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

registerAllModules();

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [HotTableModule],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.css'
})
export class GenericTableComponent {

  @Input() data: Array<any>; 
  @Input() colHeaders: boolean;
  @Input() colWidths: Array<number>; 
  @Input() rowHeaders: boolean
  @Input() height: number; 
  @Input() columnSorting: boolean;
  @Input() columns: Array<any>; 
  @Input() dropdownMenu: Array<any>;
  @Input() filters: boolean;

}
