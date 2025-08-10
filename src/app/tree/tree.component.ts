import {CollectionViewer, SelectionChange, DataSource} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {ChangeDetectionStrategy, Component, Output, EventEmitter, Input, OnInit, SimpleChanges, Injectable, signal, Signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BehaviorSubject, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import {MatTreeModule} from '@angular/material/tree';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

/** Flat node with expandable and level information */
class DynamicFlatNode {
  item: string;
  level: number;
  expandable: boolean;
  isLoading: WritableSignal<boolean>;  // <-- change type here
  isCardNode?: boolean;

  constructor(
    item: string,
    level = 1,
    expandable = false,
    isLoading: WritableSignal<boolean> = signal(false),  // <-- default writable signal
    isCardNode: boolean = false  // default false
  ) {
    this.item = item;
    this.level = level;
    this.expandable = expandable;
    this.isLoading = isLoading;
    this.isCardNode = isCardNode;
  }
}

var tree_dropdown: string[] = [];
var tree_alias: string[] = [];
var alias_data: any[] = [];

var dataMap2 = new Map<string, string[]>();

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule, MatProgressBarModule, MatCardModule, FormsModule, CommonModule, TranslocoModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements OnInit {
  @Input() data: any; 
  @Input() current_active: string;
  @Output() dataEvent = new EventEmitter<string[]>();
  searchString = "";
  dataMap2 = new Map<string, string[]>();


  treeControl!: FlatTreeControl<DynamicFlatNode>;
  dataSource!: DynamicDataSource;

  constructor(private http: HttpClient, private database: DynamicDatabase) {}

  ngOnInit() {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(
      node => node.level,
      node => node.expandable
    );
    this.dataSource = new DynamicDataSource(this.treeControl, this.database, this.http);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.treeControl || !this.dataSource) return; // ensure initialized

    const expandedBefore = this.getExpandedNodes();

    if (this.data != null) {
      alias_data = this.data['alias_data'];
      tree_dropdown = alias_data.map((obj: { name: any }) => obj.name);
      tree_alias = alias_data.map((obj: { alias: any }) => obj.alias);
      tree_dropdown.sort();
      dataMap2.clear();
      for (const val of tree_dropdown) {
        dataMap2.set(val, []);
      }
    }

    this.database.changeRootLevelNodes(tree_dropdown);
    this.dataSource.data = this.database.initialData();

    setTimeout(() => {
      this.restoreExpandedNodes(expandedBefore);
    });
  }

  getLevel = (node: DynamicFlatNode): number => node.level;

  isExpandable(nodeName: string): boolean {
    const children = this.dataMap2.get(nodeName);
    const expandable = !!children && children.length > 0;
    console.log(`Checking if "${nodeName}" is expandable: ${expandable}`);
    return expandable;
  }

  isParentNode = (_: number, node: DynamicFlatNode) =>
  node.expandable && !this.isCardNode(_, node);

  hasChild = (_: number, node: DynamicFlatNode) => this.database.isExpandable(node.item);

  noChild = (_: number, node: DynamicFlatNode) => !this.hasChild(_, node) && !this.isCardNode(_, node);

  isCardNode = (_: number, node: DynamicFlatNode) => node.item.startsWith('__CARD__');

  filterLeafNode(node: DynamicFlatNode): boolean {
    if (!this.searchString) return false;
    return node.item.toLowerCase().indexOf(this.searchString.toLowerCase()) === -1;
  }

  filterParentNode(node: DynamicFlatNode): boolean {
    if (!this.searchString || node.item.toLowerCase().indexOf(this.searchString.toLowerCase()) !== -1) {
      return false;
    }
    const descendants = this.treeControl.getDescendants(node);
    return !descendants.some(descendantNode => descendantNode.item.toLowerCase().includes(this.searchString.toLowerCase()));
  }

  getExpandedNodes(): Set<string> {
    const expanded = new Set<string>();
    if (!this.treeControl || !this.treeControl.dataNodes) return expanded;
    this.treeControl.dataNodes.forEach(node => {
      if (this.treeControl.isExpanded(node)) {
        expanded.add(node.item);
      }
    });
    return expanded;
  }

  restoreExpandedNodes(expanded: Set<string>) {
    this.treeControl.dataNodes.forEach(node => {
      if (expanded.has(node.item)) {
        this.treeControl.expand(node);
      }
    });
  }

  fullReportButton(name: string) {
      console.log('Looking for name:', name);
      console.log('alias_data:', alias_data);

      if(name === "(All)"){
        this.dataEvent.emit(["(All)", "(All)"]);
      }

      let alias = "";
      for (let i = 0; i < alias_data.length; i++) {
        console.log(alias_data[i])
        if (alias_data[i].name === name) {
          alias = alias_data[i].alias;
          break;
        }
      }
      console.log('Found name:', name);
      console.log('Emitting:', [name, alias]);
      this.dataEvent.emit([name, alias]);
  }
}

@Injectable({providedIn: 'root'})
export class DynamicDatabase {
 
  rootLevelNodesSource = new BehaviorSubject<string[]>(['test']);
  rootLevelNodes$ = this.rootLevelNodesSource.asObservable();

  initialData(): DynamicFlatNode[] {
    const rootLevelNodes = this.rootLevelNodesSource.value;
    return rootLevelNodes.map(name =>
      new DynamicFlatNode(name, 0, this.isExpandable(name)) // use actual expandability
    );
  }

  getChildren(node: string): string[] | undefined {
    return dataMap2.get(node);
  }

  isExpandable(node: string): boolean {
    return dataMap2.has(node);
  }

  changeRootLevelNodes(data: string[]) {
    this.rootLevelNodesSource.next(data);
  }

  updateChildren(parent: string, childrenNames: string[], childrenAliases: string[]) {
    dataMap2.set(parent, childrenNames);
    for (let i = 0; i < childrenNames.length; i++) {
      dataMap2.set(childrenNames[i], []);
      alias_data.push({ alias: childrenAliases[i], name: childrenNames[i] });
    }
  }
}

export class DynamicDataSource implements DataSource<DynamicFlatNode> {
  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

  get data(): DynamicFlatNode[] {
    return this.dataChange.value;
  }
  set data(value: DynamicFlatNode[]) {
    this._treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(
    private _treeControl: FlatTreeControl<DynamicFlatNode>,
    private _database: DynamicDatabase,
    private http: HttpClient,
  ) {}

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this._treeControl.expansionModel.changed.subscribe(change => {
      if (
        (change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed
      ) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  disconnect(collectionViewer: CollectionViewer): void {}

  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed
        .slice()
        .reverse()
        .forEach(node => this.toggleNode(node, false));
    }
  }

  toggleNode(node: DynamicFlatNode, expand: boolean) {
    node.isLoading.set(true);
  
    setTimeout(() => {
      const match = alias_data.find(item =>
        item.name.trim().toLowerCase() === node.item.trim().toLowerCase()
      );
      const alias = match?.alias || '';
  
      if (!alias) {
        node.isLoading.set(false);
        return;
      }
  
      if (!expand) {
        // Collapse: remove all child nodes including card
        const index = this.data.indexOf(node);
        if (index < 0) return;
  
        let count = 0;
        for (
          let i = index + 1;
          i < this.data.length && this.data[i].level > node.level;
          i++
        ) {
          count++;
        }
        this.data.splice(index + 1, count);
        this.dataChange.next(this.data);
        node.isLoading.set(false);
        return;
      }
  
      // Expand logic
      this.http.get(`https://borealisdata.ca/api/info/metrics/tree/?parentAlias=${alias}`)
        .subscribe((response: any) => {
          const childrenNames = response?.data?.children?.map((c: any) => c.name) || [];
          const childrenAliases = response?.data?.children?.map((c: any) => c.alias) || [];
  
          dataMap2.set(node.item, childrenNames);
          for (let i = 0; i < childrenNames.length; i++) {
            const childName = childrenNames[i];
            const childAlias = childrenAliases[i];
            alias_data.push({ alias: childAlias, name: childName });
            dataMap2.set(childName, []);
          }
  
          const children = this._database.getChildren(node.item);
          const index = this.data.indexOf(node);
          if (index < 0) return;
  
          // Prevent duplicate __CARD__ insertion
          const nextNode = this.data[index + 1];
          if (nextNode?.item === `__CARD__${node.item}`) {
            node.isLoading.set(false);
            return;
          }
  
          const cardNode = new DynamicFlatNode(`__CARD__${node.item}`, node.level + 1, false, signal(false), true);
          const childNodes = (children || []).map(name => {
            const isExpandable = !!this._database.isExpandable(name);
            return new DynamicFlatNode(name, node.level + 1, isExpandable);
          });
  
          this.data.splice(index + 1, 0, cardNode, ...childNodes);
          this.dataChange.next(this.data);
          node.isLoading.set(false);
        });
    }, 500);
  }
  
  
}
