import {CollectionViewer, SelectionChange, DataSource} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Output, EventEmitter, Injectable, Input, OnInit, SimpleChanges, inject, signal} from '@angular/core';
import {BehaviorSubject, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import {MatTreeModule} from '@angular/material/tree';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';

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

var tree_dropdown: string[] = [];
var tree_alias: string[] = [];
var alias_data: any[] = [];

var dataMap2 = new Map<string, string[]>([
]);

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule, MatProgressBarModule, MatCardModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css',
})

export class TreeComponent {
  @Input() data: any; 
  @Output() dataEvent = new EventEmitter<string[]>();
  searchString = "";

  database: DynamicDatabase;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.data)
    if (this.data != null){
      alias_data = this.data['alias_data']
      tree_dropdown = alias_data.map((obj: { name: any; }) => obj.name);
      tree_alias = alias_data.map((obj: { alias: any; }) => obj.alias);
      for (var val of tree_dropdown){
        dataMap2.set(val, []);
      }
    }
    console.log(tree_dropdown);
    this.database.changeRootLevelNodes(tree_dropdown)
    this.dataSource.data = this.database.initialData();
    console.log('hello')
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

  filterLeafNode(node: DynamicFlatNode): boolean {
    if (!this.searchString) {
      return false
    }
    return node.item.toLowerCase()
      .indexOf(this.searchString?.toLowerCase()) === -1
 }

 filterParentNode(node: DynamicFlatNode): boolean {

    if (    
      !this.searchString ||
      node.item.toLowerCase()
      .indexOf(
        this.searchString?.toLowerCase()
      ) !== -1
    ) {
      return false
    }
    const descendants = this.treeControl.getDescendants(node)

    if (
      descendants.some(
        (descendantNode) =>
          descendantNode.item
            .toLowerCase()
            .indexOf(this.searchString?.toLowerCase()) !== -1
      )
    ) {
      return false
    }
    return true
}

fullReportButton(alias: string){
  var name = "";  
  console.log(name, alias)
  for(var i = 0; i < alias_data.length; i++){
   if (alias_data[i].alias == alias){
    name = alias_data[i].name
   }
  } 
  console.log(name, alias)
  this.dataEvent.emit([name, alias]);
}

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
    console.log(dataMap2)
    console.log(node)
    return dataMap2.has(node);
  }

  changeRootLevelNodes(data: any){
    const rootLevelNodes = this.rootLevelNodesSource.value;
    this.rootLevelNodesSource.next(tree_dropdown)
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
  http = inject(HttpClient);

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


    node.isLoading.set(true);

    setTimeout(() => { 
      var y = ''
      var z: any = {};
      console.log(node.item)
      for(var i = 0; i < alias_data.length; i++){
        if(alias_data[i].name == node.item){
          y = alias_data[i].alias;
          console.log(y)
        }
      }

      let x = this.http.get('https://borealisdata.ca/api/info/metrics/tree/' + "?parentAlias=" + y);  
      console.log(x, y)

      x.subscribe(response => {
        console.log(response); 
        z = response;

        if ("children" in z.data){

        const z_kids = z.data.children.map((item: { name: any; }) => item.name);
        const z_kids_alias = z.data.children.map((item: { alias : any; }) => item.alias );

        dataMap2.set(node.item, [y].concat(z_kids))

        for(var i = 0; i < z_kids.length; i++){
          dataMap2.set(z_kids[i], []);
          alias_data.push({alias: z_kids_alias[i], name:z_kids[i]});
        }
        console.log()
        console.log(dataMap2)

        }

        else {
          dataMap2.set(node.item, [y])
        }

        const children = this._database.getChildren(node.item);
        const index = this.data.indexOf(node);
        if (!children || index < 0) {
          // If no children, or cannot find the node, no op
          console.log('no kids')
          return;
        }

        if (expand) {
          console.log(this._database.getChildren)
          console.log(children)
          const nodes = children.map(
            name => new DynamicFlatNode(name, node.level + 1, this._database.isExpandable(name)),
          );
          console.log(nodes)
          this.data.splice(index + 1, 0, ...nodes);
          console.log(this.data.length)
        } else {
          let count = 0;
          for (
            let i = index + 1;
            i < this.data.length && this.data[i].level > node.level;
            i++, count++
          ) {}
          this.data.splice(index + 1, count);
          console.log(this.data.length)
        }

      // notify the change
      this.dataChange.next(this.data);
      node.isLoading.set(false);
    
    })
    }, 1000);
  }

}

