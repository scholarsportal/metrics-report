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
  @Input() collectionSelected: string = "";
  @Input() start_on: boolean = false;
  @Input() startDate: string = "";
  @Input() endDate: string = "";

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
  public filecontent_rsp_date_range: Array<any> = [];

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
  public fileContentDetailHash: any = {}; 
  public fileContentLabels: Array<any> = []; 
  public fileContentData: Array<any> = []; 
  public fileContentFullData: Array<any> = []; 
  
  public monthlyDownloads: Array<any> = []; 
  public monthlyDatasets: Array<any> = []; 
  public monthlyFiles: Array<any> = [];
  public monthlyUsers: Array<any> = []; 

  public fileSizeHash: any = {}; 
  public sizeLabels: Array<any> = []; 
  public monthlySize: Array<any> = []; 
  public monthlyAggSize: Array<any> = [];

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

  public dateRangeOn = false; 
    
  ngOnChanges() {

    if (!this.firstAPIGet){
      this.cleanTempData();
    }

    console.log("date", this.dateRangeOn, this.startDate, this.endDate)

    //get number of months


    this.dataverseCollectionsURL = 'https://borealisdata.ca/api/info/metrics/tree'; 
    this.populateMonths();
    console.log(this.months) 
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
    
    this.subjectURL = 'https://borealisdata.ca/api/info/metrics/datasets/bySubject/toMonth/' + this.months[0] + this.parentAlias
    this.fileContentURL = 'https://borealisdata.ca/api/info/metrics/files/byType/monthly/' + this.parentAlias

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
          
          for (let i = 0; i <= this.months.length - 2 ; i++){
            this.monthlyDownloads.push(this.downloads_rsp.find(x=>x.date==this.months[i])['count']);
            this.monthlyAggDownloads.push(this.downloads_rsp.find(x=>x.date==this.months[i])['count'] - this.downloads_rsp.find(x=>x.date==this.months[i+1])['count']);
        
            this.monthlyDatasets.push(this.datasets_rsp.find(x=>x.date==this.months[i])['count']);
            this.monthlyAggDatasets.push(this.datasets_rsp.find(x=>x.date==this.months[i])['count'] - this.datasets_rsp.find(x=>x.date==this.months[i+1])['count']);
        
            this.monthlyFiles.push(this.files_rsp.find(x=>x.date==this.months[i])['count']);
            this.monthlyAggFiles.push(this.files_rsp.find(x=>x.date==this.months[i])['count'] - this.files_rsp.find(x=>x.date==this.months[i+1])['count']);
        
            this.monthlyUsers.push(this.users_rsp.find(x=>x.date==this.months[i])['count']);
            this.monthlyAggUsers.push(this.users_rsp.find(x=>x.date==this.months[i])['count'] - this.users_rsp.find(x=>x.date==this.months[i+1])['count']);
          }

          console.log(responses[5])
          console.log(this.filecontent_rsp)
          
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
            let date = this.filecontent_rsp[i]['date']
            if (this.fileSizeHash.hasOwnProperty(date)){
              this.fileSizeHash[date] += parseFloat((this.filecontent_rsp[i]['size'] / Math.pow(1024, 3)).toFixed(4));
            }
            else{
              this.fileSizeHash[date] = parseFloat((this.filecontent_rsp[i]['size'] / Math.pow(1024, 3)).toFixed(4));
            }
          }
          
          var fileSizeArrayAll = Object.keys(this.fileSizeHash).map((key) => [key, this.fileSizeHash[key]]);
          var fileSizeArray: Array<any> = []; 
          for (var i = 0; i < fileSizeArrayAll.length; i++){
            if (this.months.includes(fileSizeArrayAll[i][0])){
              fileSizeArray.push(fileSizeArrayAll[i])
            }
          }

          for (var i = 0; i < fileSizeArray.length - 1; i++){
            this.sizeLabels.push(fileSizeArray[i][0]);
            this.monthlySize.push(fileSizeArray[i][1]);
            this.monthlyAggSize.push(fileSizeArray[i+1][1] - fileSizeArray[i][1]);
          }
          this.monthlySize = this.monthlySize.reverse();
          this.monthlyAggSize = this.monthlyAggSize.reverse();
          console.log("size stuff", this.monthlySize, this.monthlyAggSize)

          //this.monthlyAggFiles.push(this.files_rsp.find(x=>x.date==this.months[i])['count'] - this.files_rsp.find(x=>x.date==this.months[i+1])['count']);
          
          if (this.start_on){
          for (let i = 0; i < this.filecontent_rsp.length; i++){
            if (this.months.slice(0, -1).includes(this.filecontent_rsp[i]['date'])){
              console.log(this.months, this.filecontent_rsp[i]['date'])
              this.filecontent_rsp_date_range.push(this.filecontent_rsp[i])
            }
          }
          }
          else {
            this.filecontent_rsp_date_range = this.filecontent_rsp
          }
          
          console.log(this.filecontent_rsp_date_range)
          
          for (let i = 0; i < this.filecontent_rsp_date_range.length; i++){

            //this.fileContentFullData.push({contenttype: this.filecontent_rsp_date_range[i]['contenttype'], count: this.filecontent_rsp_date_range[i]['count'], percent: (this.filecontent_rsp_date_range[i]['count'] / filecount_overall_count).toFixed(4)})

            let contentType = (this.filecontent_rsp_date_range[i]['contenttype'].split('/')[0]); 
            let count = this.filecontent_rsp_date_range[i]['count']; 
            if (this.fileContentHash.hasOwnProperty(contentType)){
              this.fileContentHash[contentType] = this.fileContentHash[contentType] + count;
            }
            else {
              this.fileContentHash[contentType] = count
            }

            let contentDetailType = (this.filecontent_rsp_date_range[i]['contenttype']); 
            let countDetail = this.filecontent_rsp_date_range[i]['count']; 
            if (this.fileContentDetailHash.hasOwnProperty(contentDetailType)){
              this.fileContentDetailHash[contentDetailType] = this.fileContentDetailHash[contentDetailType] + countDetail;
            }
            else {
              this.fileContentDetailHash[contentDetailType] = countDetail
            }
          }

          let date_range_sum = 0
          for (var key in this.fileContentHash){
            date_range_sum += this.fileContentHash[key];
          }
          console.log('count', date_range_sum)

          for (var key in this.fileContentDetailHash){
            let main_type = key.split('/')[0];
            this.fileContentFullData.push({type: main_type, contenttype: key, count: this.fileContentDetailHash[key], percent: (this.fileContentHash[main_type] / date_range_sum).toFixed(4)})
          }

          console.log(this.fileContentHash);
          console.log(this.fileContentDetailHash);
        
          for (var key in this.fileContentHash){
            this.fileContentLabels.push(key)
            this.fileContentData.push(this.fileContentHash[key]);
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
        size_graph_data: this.monthlySize,
        downloads_graph_agg_data: this.monthlyAggDownloads, 
        datasets_graph_agg_data: this.monthlyAggDatasets,
        files_graph_agg_data: this.monthlyAggFiles,
        users_graph_agg_data: this.monthlyAggUsers,
        size_graph_agg_data: this.monthlyAggSize,
        subject_label_data: this.subjectLabels,
        subject_data: this.subjectData,
        subject_full_data: this.subjectContentFullData,
        file_content_label_data: this.fileContentLabels,
        file_content_data: this.fileContentData,
        file_content_full_data: this.fileContentFullData,
        name_dropdown_data: this.dataverseCollectionsDropDown,     
        months: this.months
    }
    console.log(DataverseTabData)
    this.messageEvent.emit({"DataverseTabData": DataverseTabData});
  }

  populateMonths(){

    let date_diff = 24

    console.log("this is the start", this.startDate, this.endDate)

    if (this.start_on && this.startDate != ""){
      
      date_diff = monthDifference(this.startDate, this.endDate);
      console.log("this is date_diff", date_diff)

    }

    var upperDate = new Date();
    
    if (this.endDate != ""){
      let timestamp = Date.parse(this.endDate.concat("-02"));
      console.log(timestamp);
      var upperDate = new Date(timestamp);
      console.log("this is the upper date?", upperDate)
    }
    
    let mm = upperDate.getMonth() + 1;
    let yyyy = upperDate.getFullYear()

    console.log(mm, yyyy);

    for (let i = 0; i <=date_diff + 2; i++){
      if (i != 0){
      
        mm = mm - 1;

      if (mm == 0){
        yyyy = yyyy - 1;
        mm = 12; 
      }

    }

      var mm_s = String(mm).padStart(2, '0');
      var yyyy_s = String(yyyy);
      let date = yyyy_s + '-' + mm_s;
      console.log(date)

      console.log('here is the', date)
      this.months.push(date); 

      if (this.start_on){ 
        if (date === this.startDate){
          if (i == date_diff + 2){
            break;
          }
          else{
            i = date_diff + 1
          }
        }
      } 
    }
    //temp 
    //this.months.shift(); 

    function monthDifference(s1: string, s2: string){
      let timestamp_s = Date.parse(s1);
      var lowerDate = new Date(timestamp_s);

      let timestamp_e = Date.parse(s2);
      var upperDate = new Date(timestamp_e);

      console.log(upperDate, lowerDate)

      var months;
      months = (upperDate.getFullYear() - lowerDate.getFullYear()) * 12;
      months += Math.abs(upperDate.getMonth() - lowerDate.getMonth());
      return months; 
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
    this.monthlySize = []; 
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
    this.fileSizeHash = {};
    this.fileContentDetailHash= {}; 
    this.fileContentLabels= []; 
    this.fileContentData = []; 
    this.filecontent_rsp = [];
    this.filecontent_rsp_date_range = [];

    this.monthlyAggDownloads = []; 
    this.monthlyAggDatasets = []; 
    this.monthlyAggFiles = [];
    this.monthlyAggUsers = []; 
    this.monthlyAggSize = []; 

    this.subjectContentFullData = [];
    this.fileContentFullData = [];

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
