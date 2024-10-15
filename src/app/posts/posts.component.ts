import { HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';  
import { Component, inject, EventEmitter, Output, Input} from '@angular/core';
import { IntervalHistogram } from 'perf_hooks';
import { forkJoin } from 'rxjs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [HttpClientModule, MatProgressSpinnerModule, CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  @Input() collectionSelected: String = "";
  @Input() dateSelected: String = "";

  httpClient = inject(HttpClient);
  public data: Array<any> = [];
  public months: Array<any> = [];
  public monthsDate: Array<any> = [];
  
  public dataverseCollectionsURL: string = '';
  public monthsDownloadsDateURLS: string = '';
  public monthsDatasetsDateURLS: string = '';
  public monthsFilesDateURLS: string = '';
  public monthsUsersDateURLS: string = '';
  public parentAlias: String = "";

  public data_rsp: any;
  public downloads_rsp: Array<any> = [];
  public datasets_rsp: Array<any> = [];
  public files_rsp: Array<any> = [];
  public users_rsp: Array<any> = [];
  public subject_rsp: Array<any> = [];
  public filecontent_rsp: Array<any> = [];

  public table_dataset_rsp: any= {};
  public table_file_rsp: any= {};

  public datasetURL: string = '';
  public datasetsContents: Array<any> = [];
  public datasets: Array<any> = []; 

  public fileURL: string = '';
  public filesContents: Array<any> = [];
  public files: Array<any> = []; 

  public subjectURL: string = '';
  public subjectContents: Array<any> = []; 
  public subjectLabels: Array<any> = []; 
  public subjectData: Array<any> = []; 
  public subjectContentFullData: Array<any> = []; 

  public fileContentURL: string = '';
  public fileContentHash: any = {}; 
  public fileContentLabels: Array<any> = []; 
  public fileContentData: Array<any> = []; 
  public fileContentFullData: Array<any> = []; 
  
  public monthlyDownloads: Array<any> = []; 
  public monthlyDatasets: Array<any> = []; 
  public monthlyFiles: Array<any> = [];
  public monthlyUsers: Array<any> = []; 

  public monthlyAggDownloads: Array<any> = []; 
  public monthlyAggDatasets: Array<any> = []; 
  public monthlyAggFiles: Array<any> = [];
  public monthlyAggUsers: Array<any> = [];

  public observables: Array<any> = [];

  public dataversesDataTree: Array<any> = [];
  public dataverseCollections: Array<any> = [];

  public dataverseCollectionsDropDown: Array<any> = [];
  public dataverseAlias: Array<any> = [];

  public isLoading = false;

  public firstAPIGet = true;
    
  ngOnChanges() {

    if (!this.firstAPIGet){
      this.cleanTempData();
    }

    this.dataverseCollectionsURL = 'https://borealisdata.ca/api/info/metrics/tree'; 
    this.populateMonths();
    if (this.collectionSelected != "(All)"){
      this.parentAlias = "?parentAlias=" + this.collectionSelected;
    }
    else {
      this.parentAlias = "";
    }

    this.monthsDownloadsDateURLS = 'https://borealisdata.ca/api/info/metrics/downloads/monthly/' + this.parentAlias
    this.monthsDatasetsDateURLS = 'https://borealisdata.ca/api/info/metrics/datasets/monthly/' + this.parentAlias
    this.monthsFilesDateURLS = 'https://borealisdata.ca/api/info/metrics/files/monthly/' + this.parentAlias
    this.monthsUsersDateURLS = 'https://borealisdata.ca/api/info/metrics/accounts/monthly/'
    
    this.subjectURL = "https://borealisdata.ca/api/info/metrics/datasets/bySubject" + this.parentAlias
    this.fileContentURL = "https://borealisdata.ca/api/info/metrics/files/byType" + this.parentAlias
    
    if (this.collectionSelected != "(All)"){
      this.datasetURL = "https://borealisdata.ca/api/search?q=*&type=dataset&subtree=" + this.collectionSelected + "&per_page=1000";
      this.fileURL = "https://borealisdata.ca/api/search?q=*&type=file&subtree=" + this.collectionSelected + "&per_page=1000";
    }

    this.observables.push(this.httpClient.get<[]>(this.dataverseCollectionsURL));
    this.observables.push(this.httpClient.get<[]>(this.monthsDownloadsDateURLS))
    this.observables.push(this.httpClient.get<[]>(this.monthsDatasetsDateURLS))
    this.observables.push(this.httpClient.get<[]>(this.monthsFilesDateURLS))
    this.observables.push(this.httpClient.get<[]>(this.monthsUsersDateURLS))
    this.observables.push(this.httpClient.get<[]>(this.subjectURL))
    this.observables.push(this.httpClient.get<[]>(this.fileContentURL))

    /*
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'X-Dataverse-key': 'fd4c70ad-9384-463d-a0f9-c83c1c0c6d7c'
    });
    //this.observables.push(this.httpClient.get<[]>("https://borealisdata.ca/api/dataverses/macewan/storagesize", { headers: httpHeaders}))
    */
    if (this.collectionSelected != "(All)"){
      this.observables.push(this.httpClient.get<[]>(this.datasetURL));
      this.observables.push(this.httpClient.get<[]>(this.fileURL));
    }

    console.log(this.observables)

    forkJoin(this.observables).subscribe(
      (rep) => {
          this.isLoading = true;
          const responses = rep as any as any[];
          console.log('raw responses,', responses); 
          
          this.data_rsp = responses[0]['data'];
          this.downloads_rsp = responses[1]['data'];
          this.datasets_rsp = responses[2]['data'];
          this.files_rsp  = responses[3]['data'];
          this.users_rsp = responses[4]['data'];
          this.subject_rsp = responses[5]['data'];
          this.filecontent_rsp = responses[6]['data'];

          if (this.collectionSelected != "(All)"){
            this.table_dataset_rsp = responses[7]['data'];
            this.table_file_rsp = responses[8]['data'];
          }
          
          this.dataversesDataTree = this.data_rsp['children']
          if (this.collectionSelected != "(All)"){
              console.log("HAHAHAHA", this.dataversesDataTree, this.collectionSelected)
              let aliasRow = this.findAliasRow(this.dataversesDataTree , this.collectionSelected)
              let tempDataTree = this.dataversesDataTree [aliasRow]
              if (tempDataTree.hasOwnProperty("children")) {
                this.dataversesDataTree = this.dataversesDataTree[aliasRow]['children']
              }
              else{
                this.dataversesDataTree = [];
              }
          }

          for (let i = 0; i < this.dataversesDataTree.length; i++){
            this.dataverseCollections.push(
              {name: this.dataversesDataTree[i]['name']
              }
            )
            console.log(this.dataverseCollections);
            if (!this.firstAPIGet){
            this.dataverseAlias.push(
              {
                alias: this.dataversesDataTree[i]['alias'],
                name: this.dataversesDataTree[i]['name']
              }
            )
            this.dataverseCollectionsDropDown.push(this.dataversesDataTree[i]['name'])
            }
          }
          console.log("look at the months,", this.months)
          for (let i = 0; i <= 23; i++){
            this.monthlyDownloads.push(this.downloads_rsp.find(x=>x.date==this.months[i])['count']);
            this.monthlyAggDownloads.push(this.downloads_rsp.find(x=>x.date==this.months[i])['count'] - this.downloads_rsp.find(x=>x.date==this.months[i+1])['count']);
        
            this.monthlyDatasets.push(this.datasets_rsp.find(x=>x.date==this.months[i])['count']);
            this.monthlyAggDatasets.push(this.datasets_rsp.find(x=>x.date==this.months[i])['count'] - this.datasets_rsp.find(x=>x.date==this.months[i+1])['count']);
        
            this.monthlyFiles.push(this.files_rsp.find(x=>x.date==this.months[i])['count']);
            this.monthlyAggFiles.push(this.files_rsp.find(x=>x.date==this.months[i])['count'] - this.files_rsp.find(x=>x.date==this.months[i+1])['count']);
        
            this.monthlyUsers.push(this.users_rsp.find(x=>x.date==this.months[i])['count']);
            this.monthlyAggUsers.push(this.users_rsp.find(x=>x.date==this.months[i])['count'] - this.users_rsp.find(x=>x.date==this.months[i+1])['count']);
          }
          
          
          let subject_overall_count = 0;
          for (let i = 0; i < this.subject_rsp.length; i++){
            subject_overall_count += this.subject_rsp[i]['count']
          }
          for (let i = 0; i < this.subject_rsp.length; i++){
            this.subjectContentFullData.push({subject: this.subject_rsp[i]['subject'], count: this.subject_rsp[i]['count'], percent: (this.subject_rsp[i]['count'] / subject_overall_count).toFixed(4)})
          }

          this.subjectLabels = this.subject_rsp.map((x: { subject: any; }) => x.subject);
          this.subjectData = this.subject_rsp.map((x: { count: any; }) => x.count);
          
          let filecount_overall_count = 0;
          for (let i = 0; i < this.filecontent_rsp.length; i++){
            filecount_overall_count += this.filecontent_rsp[i]['count']
          }
          for (let i = 0; i < this.filecontent_rsp.length; i++){

            this.fileContentFullData.push({contenttype: this.filecontent_rsp[i]['contenttype'], count: this.filecontent_rsp[i]['count'], percent: (this.filecontent_rsp[i]['count'] / filecount_overall_count).toFixed(4)})

            let contentType = (this.filecontent_rsp[i]['contenttype'].split('/')[0]); 
            let count = this.filecontent_rsp[i]['count']; 
            if (this.fileContentHash.hasOwnProperty(contentType)){
              this.fileContentHash[contentType] = this.fileContentHash[contentType] + count;
            }
            else {
              this.fileContentHash[contentType] = count
            }
          }
        
          for (var key in this.fileContentHash){
            this.fileContentLabels.push(key)
            this.fileContentData.push(this.fileContentHash[key]);
          }
        
          if (this.collectionSelected != "(All)"){
            this.datasetsContents = this.table_dataset_rsp['items']
            for (let i = 0; i < this.datasetsContents.length; i++){
              console.log(this.datasetsContents[i])
              if (this.datasetsContents[i].hasOwnProperty("authors")){
              this.datasets.push({
                name: this.datasetsContents[i]['name'],
                author: this.datasetsContents[i]['authors'].join(),
                dataverse_name: this.datasetsContents[i]['name_of_dataverse'], 
                subject: this.datasetsContents[i]['subjects'].join(), 
                date: this.datasetsContents[i]['published_at'].split("T")[0], 
                id: this.datasetsContents[i]['global_id'], 
                views: (Math.floor(Math.random() * 5000)) + 20, 
                downloads: (Math.floor(Math.random() * 300)) + 2, 
                citations: (Math.floor(Math.random() * 20))
              })
            }
            }
            this.filesContents = this.table_file_rsp['items']
            for (let i = 0; i < this.filesContents.length; i++){
              this.files.push({
                name: this.filesContents[i]['name'],
                file_type: this.filesContents[i]['file_content_type'],
                reference: this.filesContents[i]['dataset_citation'],
                dataset_name: this.filesContents[i]['dataset_name'], 
                id: this.filesContents[i]['dataset_persistent_id'], 
                date: this.filesContents[i]['published_at'].split("T")[0], 
                size: this.filesContents[i]['size_in_bytes'], 
                views: (Math.floor(Math.random() * 5000)) + 20, 
                downloads: (Math.floor(Math.random() * 300)) + 2, 
                citations: (Math.floor(Math.random() * 20))
              })
            }
          }
          this.months.pop()
          this.sendData();
      },
      err => console.error(err)
   );

   this.isLoading = false;
   this.firstAPIGet = false;
  
  }

  @Output() messageEvent = new EventEmitter<any>();

  sendData() {
    var DataverseTabData = {
        table_data: this.dataverseCollections,
        alias_data: this.dataverseAlias,
        downloads_graph_data: this.monthlyDownloads, 
        datasets_graph_data: this.monthlyDatasets,
        files_graph_data: this.monthlyFiles,
        users_graph_data: this.monthlyUsers,
        downloads_graph_agg_data: this.monthlyAggDownloads, 
        datasets_graph_agg_data: this.monthlyAggDatasets,
        files_graph_agg_data: this.monthlyAggFiles,
        users_graph_agg_data: this.monthlyAggUsers,
        subject_label_data: this.subjectLabels,
        subject_data: this.subjectData,
        subject_full_data: this.subjectContentFullData,
        file_content_label_data: this.fileContentLabels,
        file_content_data: this.fileContentData,
        file_content_full_data: this.fileContentFullData,
        name_dropdown_data: this.dataverseCollectionsDropDown,     
        months: this.months
    }
    var DatasetTabData = {
      table_data: this.datasets
    }
    var FileTabData = {
      table_data: this.files
    }
    console.log(DataverseTabData)
    console.log(DatasetTabData)
    console.log(FileTabData)
    this.messageEvent.emit({"DataverseTabData": DataverseTabData, "DatasetTabData": DatasetTabData, "FileTabData":FileTabData});
  }

  populateMonths(){
    let today = new Date();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear()

    for (let i = 0; i <=24; i++){
      if (i != 0){
        mm = mm - 1;
      }

      if (mm == 0){
        yyyy = yyyy - 1;
        mm = 12; 
      }

      var mm_s = String(mm).padStart(2, '0');
      var yyyy_s = String(yyyy);
      let date = yyyy_s + '-' + mm_s;

      this.months.push(date); 
    }
  }

  cleanTempData(){
    
    this.dataverseCollectionsDropDown = [];

    this.dataverseCollectionsURL = '';
    this.monthsDownloadsDateURLS = '';
    this.monthsDatasetsDateURLS = '';
    this.monthsFilesDateURLS = '';
    this.monthsUsersDateURLS = '';

    this.monthlyDownloads = []; 
    this.monthlyDatasets = []; 
    this.monthlyFiles = [];
    this.monthlyUsers = []; 
    this.observables = [];

    this.dataversesDataTree = [];
    this.dataverseCollections = [];

    this.datasetURL = '';
    this.datasetsContents = [];
    this.datasets = []; 

    this.subjectURL = '';
    this.subjectContents = []; 
    this.subjectLabels = []; 
    this.subjectData = []; 

    this.fileContentURL = '';
    this.fileContentHash= {}; 
    this.fileContentLabels= []; 
    this.fileContentData = []; 

    this.monthlyAggDownloads = []; 
    this.monthlyAggDatasets = []; 
    this.monthlyAggFiles = [];
    this.monthlyAggUsers = []; 

    this.months = [];
  }

  findAliasRow(arr: Array<any>, target: String){
    for (let i = 0; i <= arr.length; i++){
      if (arr[i]['alias'] == target){
        return(i)
      }
    }
    return(-1)
  }

}
