import {CollectionViewer, SelectionChange, DataSource} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Injectable, Input, OnInit, SimpleChanges, inject, signal} from '@angular/core';
import {BehaviorSubject, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTreeModule} from '@angular/material/tree';

/** Flat node with expandable and level information */
class DynamicFlatNode {
  constructor(
    public item: string,
    public level = 1,
    public expandable = false,
    public isLoading = signal(false),
  ) {}
}

var dataMap = new Map<string, string[]>([
  ['Fruits', ['Apple', 'Orange', 'Banana']],
  ['Vegetables', ['Tomato', 'Potato', 'Onion']],
  ['Apple', ['Fuji', 'Macintosh']],
  ['Onion', ['Yellow', 'White', 'Purple']],
]);

var swag: string[] = [];

var dataMap2 = new Map<string, string[]>([
]);

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule, MatProgressBarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css',
})

export class TreeComponent {
  @Input() data: any;  

  database: DynamicDatabase;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.data)
    if (this.data != null){
    swag = this.data['alias_data'].map((obj: { name: any; }) => obj.name);
      for (var val of swag){
        dataMap2.set(val, []);
      }
    }
    console.log(swag);
    this.database.changeRootLevelNodes(swag)
    this.dataSource.data = this.database.initialData();
  }

  constructor() {
    this.database = inject(DynamicDatabase);

    ///const alias_data: any = this.data["DataverseTabData"]['alias_data'];

    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, this.database);

    this.dataSource.data = this.database.initialData();
  }

  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;
}

/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
@Injectable({providedIn: 'root'})
export class DynamicDatabase {

  ///dataMap_test = new Map<string, string[]>(TreeComponent.alias_data);

  rootLevelNodesSource = new BehaviorSubject<string[]>(['test']);
  rootLevelNodes$ = this.rootLevelNodesSource.asObservable();


  /** Initial data from database */
  initialData(): DynamicFlatNode[] {
    const rootLevelNodes = this.rootLevelNodesSource.value;
    return rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
  }

  getChildren(node: string): string[] | undefined {
    return dataMap2.get(node);
  }

  isExpandable(node: string): boolean {
    return dataMap2.has(node);
  }

  changeRootLevelNodes(data: any){
    const rootLevelNodes = this.rootLevelNodesSource.value;
    this.rootLevelNodesSource.next(swag)
    console.log(this.rootLevelNodesSource.value) 
    return rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
  }

}
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
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

  /** Handle expand/collapse behaviors */
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

  /**
   * Toggle the node, remove from display list
   */
  toggleNode(node: DynamicFlatNode, expand: boolean) {
    const children = this._database.getChildren(node.item);
    const index = this.data.indexOf(node);
    if (!children || index < 0) {
      // If no children, or cannot find the node, no op
      return;
    }

    node.isLoading.set(true);

    setTimeout(() => {
      if (expand) {
        const nodes = children.map(
          name => new DynamicFlatNode(name, node.level + 1, this._database.isExpandable(name)),
        );
        this.data.splice(index + 1, 0, ...nodes);
      } else {
        let count = 0;
        for (
          let i = index + 1;
          i < this.data.length && this.data[i].level > node.level;
          i++, count++
        ) {}
        this.data.splice(index + 1, count);
      }

      // notify the change
      this.dataChange.next(this.data);
      node.isLoading.set(false);
    }, 1000);
  }
}