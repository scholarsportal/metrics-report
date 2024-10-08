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
  public monthsDownloadsDateURLS: Array<any> = [];
  public monthsDatasetsDateURLS: Array<any> = [];
  public monthsFilesDateURLS: Array<any> = [];
  public monthsUsersDateURLS: Array<any> = [];
  public parentAlias: String = "";

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

  public fileContentURL: string = '';
  public fileContentHash: any = {}; 
  public fileContentLabels: Array<any> = []; 
  public fileContentData: Array<any> = []; 
  
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

  public today = new Date();
  public mm = this.today.getMonth() + 1;
  public yyyy = this.today.getFullYear()

  public isLoading = false;

  public firstAPIGet = true;
    
  ngOnChanges() {

    console.log(this.collectionSelected);
    console.log(this.dateSelected)

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
    for (let i = 0; i <= 24; i++){
      this.monthsDownloadsDateURLS.push('https://borealisdata.ca/api/info/metrics/downloads/toMonth/' + this.months[i] + this.parentAlias)
    }
    for (let i = 0; i <= 24; i++){
      this.monthsDatasetsDateURLS.push('https://borealisdata.ca/api/info/metrics/datasets/toMonth/' + this.months[i] + this.parentAlias)
    }
    for (let i = 0; i <= 24; i++){
      this.monthsFilesDateURLS.push('https://borealisdata.ca/api/info/metrics/files/toMonth/' + this.months[i] + this.parentAlias)
    }
    for (let i = 0; i <= 24; i++){
      this.monthsUsersDateURLS.push('https://borealisdata.ca/api/info/metrics/accounts/toMonth/' + this.months[i])
    }
    
    this.subjectURL = "https://borealisdata.ca/api/info/metrics/datasets/bySubject" + this.parentAlias
    this.fileContentURL = "https://borealisdata.ca/api/info/metrics/files/byType" + this.parentAlias
    
    if (this.collectionSelected != "(All)"){
      this.datasetURL = "https://borealisdata.ca/api/search?q=*&type=dataset&subtree=" + this.collectionSelected + "&per_page=1000";
    }
    if (this.collectionSelected != "(All)"){
      this.fileURL = "https://borealisdata.ca/api/search?q=*&type=file&subtree=" + this.collectionSelected + "&per_page=1000";
    }

    this.observables.push(this.httpClient.get<[]>(this.dataverseCollectionsURL));
    for (let i = 0; i <= 24; i++){
      this.observables.push(this.httpClient.get<[]>(this.monthsDownloadsDateURLS[i]))
    }
    for (let i = 0; i <= 24; i++){
      this.observables.push(this.httpClient.get<[]>(this.monthsDatasetsDateURLS[i]))
    }
    for (let i = 0; i <= 24; i++){
      this.observables.push(this.httpClient.get<[]>(this.monthsFilesDateURLS[i]))
    }
    for (let i = 0; i <= 24; i++){
      this.observables.push(this.httpClient.get<[]>(this.monthsUsersDateURLS[i]))
    }
    this.observables.push(this.httpClient.get<[]>(this.subjectURL))
    this.observables.push(this.httpClient.get<[]>(this.fileContentURL))
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'X-Dataverse-key': 'fd4c70ad-9384-463d-a0f9-c83c1c0c6d7c'
    });
    //this.observables.push(this.httpClient.get<[]>("https://borealisdata.ca/api/dataverses/macewan/storagesize", { headers: httpHeaders}))
    if (this.collectionSelected != "(All)"){
      this.observables.push(this.httpClient.get<[]>(this.datasetURL));
    }
    if (this.collectionSelected != "(All)"){
      this.observables.push(this.httpClient.get<[]>(this.fileURL));
    }

    console.log(this.observables)

    forkJoin(this.observables).subscribe(
      (rep) => {
          this.isLoading = true;
          const responses = rep as any as any[];
          console.log('hello,', responses); 
          console.log(responses[1]);
          this.data = responses[0]['data'];
          if (this.collectionSelected == "(All)"){
          this.dataversesDataTree = responses[0]['data']['children']
          }
          else {
            let aliasRow = this.findAliasRow(responses[0]['data']['children'], this.collectionSelected)
            console.log("HAHAHAHA", aliasRow, responses[0]['data']['children'][aliasRow]['children'])
            let tempDataTree = responses[0]['data']['children'][aliasRow]
            if (tempDataTree.hasOwnProperty("children")) {
              this.dataversesDataTree = responses[0]['data']['children'][aliasRow]['children']
            }
            else{
              this.dataversesDataTree = [];
            }
          }
          for (let i = 0; i < this.dataversesDataTree.length; i++){
            this.dataverseCollections.push(
              {name: this.dataversesDataTree[i]['name'],
               views: (Math.floor(Math.random() * 5000)) + 20,
               downloads: (Math.floor(Math.random() * 300)) + 2,
               citations: (Math.floor(Math.random() * 20))
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
          for (let i = 0; i <= 23; i++){
            this.monthlyDownloads.push({month: this.months[i], count: responses[i+1]['data']['count']});
            this.monthlyAggDownloads.push({month: this.months[i], count: responses[i+1]['data']['count'] - responses[i+2]['data']['count']})
          }
          for (let i = 25; i <= 48; i++){
            this.monthlyDatasets.push({month: this.months[i-25], count: responses[i+1]['data']['count']});
            this.monthlyAggDatasets.push({month: this.months[i-25], count: responses[i+1]['data']['count'] - responses[i+2]['data']['count']})
          }
          for (let i = 50; i <= 73; i++){
            this.monthlyFiles.push({month: this.months[i-50], count: responses[i+1]['data']['count']});
            this.monthlyAggFiles.push({month: this.months[i-50], count: responses[i+1]['data']['count'] - responses[i+2]['data']['count']})
          }
          for (let i = 75; i <= 98; i++){
            this.monthlyUsers.push({month: this.months[i-75], count: responses[i+1]['data']['count']});
            this.monthlyAggUsers.push({month: this.months[i-75], count: responses[i+1]['data']['count'] - responses[i+2]['data']['count']})
          }

          for (let i = 0; i < responses[101]['data'].length; i++){
            this.subjectLabels.push(responses[101]['data'][i]['subject'])
            this.subjectData.push(responses[101]['data'][i]['count'])
          }

          for (let i = 0; i < responses[102]['data'].length; i++){
            let contentType = (responses[102]['data'][i]['contenttype'].split('/')[0]); 
            let count = responses[102]['data'][i]['count']; 
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
            this.datasetsContents = responses[responses.length-2]['data']['items']
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
            this.filesContents = responses[responses.length-1]['data']['items']
            for (let i = 0; i < this.filesContents.length; i++){
              console.log(this.filesContents[i])
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
        file_content_label_data: this.fileContentLabels,
        file_content_data: this.fileContentData,
        name_dropdown_data: this.dataverseCollectionsDropDown     
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
    for (let i = 0; i <=24; i++){
      if (i != 0){
        this.mm = this.mm - 1;
      }

      if (this.mm == 0){
        this.yyyy = this.yyyy - 1;
        this.mm = 12; 
      }

      var mm_s = String(this.mm).padStart(2, '0');
      var yyyy_s = String(this.yyyy);
      let date = yyyy_s + '-' + mm_s;

      this.months.push(date); 
    }
  }

  async getMontlyDataverseN(n: number){
    this.httpClient.get('https://borealisdata.ca/api/info/metrics/downloads/toMonth/' + this.months[n])
      .subscribe({
        next: (data: any) => {
          this.data = data['data'];
          var count = data['data']['count']
          this.monthlyDownloads.push({month: this.months[n], count: count})
          this.sendData();
        }, error: (err) => console.log(err)
      });
  }

  cleanTempData(){
    
    this.dataverseCollectionsDropDown = [];

    this.dataverseCollectionsURL = '';
    this.monthsDownloadsDateURLS = [];
    this.monthsDatasetsDateURLS = [];
    this.monthsFilesDateURLS = [];
    this.monthsUsersDateURLS = [];

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
