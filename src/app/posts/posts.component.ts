import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { forkJoin } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingService } from '../loading.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [HttpClientModule, MatProgressSpinnerModule, CommonModule, MatProgressBarModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  // --- Inputs ---
  @Input() collectionSelected: string = "";
  @Input() collectionSelectedName: string = ""; 
  @Input() start_on: boolean = false;
  @Input() startDate: string = "";
  @Input() endDate: string = "";

  // --- Constructor ---
  constructor(private apiService: ApiService, private loadingService: LoadingService) {}

  // --- Data from API responses ---
  public data_rsp: any;
  public downloads_rsp: any[] = [];
  public datasets_rsp: any[] = [];
  public files_rsp: any[] = [];
  public users_rsp: any[] = [];
  public subject_rsp: any[] = [];
  public filecontent_rsp: any[] = [];
  public filecontent_rsp_date_range: any[] = [];
  public dataverse_rsp: any;
  public authors_rsp: any;
  public creation_date_rs: any; 

  // --- Processed Data Collections ---
  public data: any[] = [];
  public dataversesDataTree: any[] = [];
  public dataverseCollections: Array<{name: string}> = [];
  public dataverseAlias: Array<{alias: string, name: string}> = [];
  public dataverseCollectionsDropDown: string[] = [];

  // --- Table Data ---
  public table_dataset_rsp: Record<string, any> = {};
  public table_file_rsp: Record<string, any> = {};

  // --- Count Variables ---
  public dataverseCount: number = 0;

  // --- URLs ---
  public datasetURL: string = '';
  public fileURL: string = '';
  public subjectURL: string = '';
  public fileContentURL: string = '';

  // --- Contents & Datasets ---
  public datasetsContents: any[] = [];
  public datasets: any[] = []; 
  public filesContents: any[] = [];
  public files: any[] = []; 
  public subjectContents: any[] = []; 

  // --- Subject-related Data for Charts ---
  public subjectLabels: string[] = []; 
  public subjectData: number[] = []; 
  public subjectContentFullData: Array<{subject: string, count: number, percent: string}> = []; 

  // --- File Content-related Data ---
  public fileContentHash: Record<string, number> = {}; 
  public fileContentDetailHash: Record<string, number> = {}; 
  public fileContentLabels: string[] = []; 
  public fileContentData: number[] = []; 
  public fileContentFullData: Array<{type: string, contenttype: string, count: number, percent: string}> = []; 

  // --- Monthly Aggregated Metrics ---
  public months: string[] = [];
  public monthsDate: Date[] = [];

  public monthlyDownloads: number[] = []; 
  public monthlyDatasets: number[] = []; 
  public monthlyFiles: number[] = [];
  public monthlyUsers: number[] = []; 

  public monthlyAggDownloads: number[] = []; 
  public monthlyAggDatasets: number[] = []; 
  public monthlyAggFiles: number[] = [];
  public monthlyAggUsers: number[] = [];

  // --- File Size Metrics ---
  public fileSizeHash: Record<string, number> = {}; 
  public sizeLabels: string[] = []; 
  public monthlySize: number[] = []; 
  public monthlyAggSize: number[] = [];

  // --- Others ---
  public observables: any[] = [];

  /// -- Creation Date --- 
  public creationDate: string;

  // --- Flags ---
  public isLoading: boolean = false;
  public firstAPIGet: boolean = true;
  public dateRangeOn: boolean = false;

  // --- Errors ---
  errorFlag: boolean = false;

    
  ngOnChanges() {
    if (!this.firstAPIGet) {
      this.cleanTempData();
      console.log('Clean Up Time');
    }
  
    this.populateMonths();
    console.log(this.months);
    console.log("date", this.dateRangeOn, this.startDate, this.endDate);
  
    this.apiService.getAllMetrics(this.cleanedParentAlias, this.months[0]).subscribe(
      ({ data: rep, errorOccurredFlag }) => {
        this.loadingService.hide();
    
        console.log('raw responses,', rep);
        this.errorFlag = errorOccurredFlag;
    
        // your existing logic using rep (which is an array of results) continues unchanged
        
        [
          this.data_rsp,
          this.downloads_rsp,
          this.datasets_rsp,
          this.files_rsp,
          this.users_rsp,
          this.subject_rsp,
          this.filecontent_rsp,
          this.dataverse_rsp,
          this.creation_date_rs
        ] = rep.map((r, idx) => {
          if (r && typeof r.data === 'object' && Object.keys(r.data).length === 0) {
            if ([0, 7, 8].includes(idx)) {
              return {};
            }
            return [];
          }
          return r.data;
        });

        console.log(this.creation_date_rs)

        if (this.creation_date_rs?.date) {
          this.creationDate = this.creation_date_rs.date;
        }
  
        this.dataversesDataTree = Array.isArray(this.data_rsp?.children) ? this.data_rsp.children : [];
  
        // Populate dataverseCollections and dataverseAlias arrays
        this.dataverseCollections = this.dataversesDataTree.map(item => ({ name: item.name }));
  
        if (!this.firstAPIGet) {
          this.dataverseAlias = this.dataversesDataTree.map(item => ({
            alias: item.alias,
            name: item.name
          }));
          this.dataverseCollectionsDropDown = this.dataversesDataTree.map(item => item.name);
        }
  
        console.log("look at the months,", this.months);
  
        if (!Array.isArray(this.downloads_rsp) || this.downloads_rsp.length < this.months.length) {
          this.months = Array.isArray(this.downloads_rsp) ? this.downloads_rsp.map(item => item.date).reverse() : this.months;
        }
  
        // Prepare monthly arrays
        for (let i = 0; i < this.months.length - 1; i++) {
          const currDate = this.months[i];
          const nextDate = this.months[i + 1];
  
          const findByDate = (arr: any[]) => (date: string) => arr.find(x => x.date === date)?.count ?? 0;
  
          const downloadsCount = Array.isArray(this.downloads_rsp) ? findByDate(this.downloads_rsp) : () => 0;
          const datasetsCount = Array.isArray(this.datasets_rsp) ? findByDate(this.datasets_rsp) : () => 0;
          const filesCount = Array.isArray(this.files_rsp) ? findByDate(this.files_rsp) : () => 0;
          const usersCount = Array.isArray(this.users_rsp) ? findByDate(this.users_rsp) : () => 0;
  
          this.monthlyDownloads.push(downloadsCount(currDate));
          this.monthlyAggDownloads.push(downloadsCount(currDate) - downloadsCount(nextDate));
  
          this.monthlyDatasets.push(datasetsCount(currDate));
          this.monthlyAggDatasets.push(datasetsCount(currDate) - datasetsCount(nextDate));
  
          this.monthlyFiles.push(filesCount(currDate));
          this.monthlyAggFiles.push(filesCount(currDate) - filesCount(nextDate));
  
          this.monthlyUsers.push(usersCount(currDate));
          this.monthlyAggUsers.push(usersCount(currDate) - usersCount(nextDate));
        }
  
        // Subject counts & percentages
        const subjectOverallCount = Array.isArray(this.subject_rsp) ? this.subject_rsp.reduce((acc, cur) => acc + cur.count, 0) : 0;
        this.subjectContentFullData = this.subject_rsp.map(s => ({
          subject: s.subject,
          count: s.count,
          percent: subjectOverallCount > 0
            ? (s.count / subjectOverallCount).toFixed(4)
            : "0.0000"
        }));
        this.subjectLabels = Array.isArray(this.subject_rsp) ? this.subject_rsp.map(x => x.subject) : [];
        this.subjectData = Array.isArray(this.subject_rsp) ? this.subject_rsp.map(x => x.count) : [];
  
        // File content size aggregation
        const fileCountOverallCount = Array.isArray(this.filecontent_rsp) ? this.filecontent_rsp.reduce((acc, cur) => acc + cur.count, 0) : 0;
  
        this.fileSizeHash = Array.isArray(this.filecontent_rsp) ? this.filecontent_rsp.reduce((acc, item) => {
          const date = item.date;
          const sizeGB = parseFloat((item.size / Math.pow(1024, 3)).toFixed(4));
          acc[date] = (acc[date] || 0) + sizeGB;
          return acc;
        }, {} as Record<string, number>) : {};
  
        const fileSizeArrayAll = Object.entries(this.fileSizeHash);
        const fileSizeArray = fileSizeArrayAll.filter(([key]) => this.months.includes(String(key)));
  
        this.sizeLabels = [];
        this.monthlySize = [];
        this.monthlyAggSize = [];
  
        for (let i = 0; i < fileSizeArray.length - 1; i++) {
          this.sizeLabels.push(fileSizeArray[i][0]);
          this.monthlySize.push(fileSizeArray[i][1]);
          this.monthlyAggSize.push(fileSizeArray[i + 1][1] - fileSizeArray[i][1]);
        }
  
        this.monthlySize.reverse();
        this.monthlyAggSize.reverse();
        console.log("size stuff", this.monthlySize, this.monthlyAggSize);
  
        this.dataverseCount = this.dataverse_rsp?.count ?? 0;
  
        if (this.start_on) {
          this.filecontent_rsp_date_range = Array.isArray(this.filecontent_rsp) ? this.filecontent_rsp.filter(item => this.months.slice(0, -1).includes(item.date)) : [];
        } else {
          this.filecontent_rsp_date_range = Array.isArray(this.filecontent_rsp) ? this.filecontent_rsp : [];
        }
  
        console.log(this.filecontent_rsp_date_range);
  
        this.fileContentHash = {};
        this.fileContentDetailHash = {};
  
        this.filecontent_rsp_date_range.forEach(item => {
          const contentType = item.contenttype?.split('/')[0] ?? '';
          const count = item.count ?? 0;
  
          if (item.date === this.months[0]) {
            this.fileContentHash[contentType] = (this.fileContentHash[contentType] || 0) + count;
  
            this.fileContentDetailHash[item.contenttype] = (this.fileContentDetailHash[item.contenttype] || 0) + count;
          }
        });
  
        const dateRangeSum = Object.values(this.fileContentHash).reduce((acc, val) => acc + val, 0);
        console.log('count', dateRangeSum);
  
        this.fileContentFullData = Object.entries(this.fileContentDetailHash).map(([key, value]) => {
          const mainType = key.split('/')[0];
          return {
            type: mainType,
            contenttype: key,
            count: value,
            percent: dateRangeSum > 0 ? (this.fileContentHash[mainType] / dateRangeSum).toFixed(4) : "0"
          };
        });
  
        console.log(this.fileContentHash);
        console.log(this.fileContentDetailHash);
  
        this.fileContentLabels = Object.keys(this.fileContentHash);
        this.fileContentData = Object.values(this.fileContentHash);
  
        this.months.pop();
        this.sendData();
      },
      (error) => {
        // This is a fallback for the unlikely case the entire forkJoin fails (very rare if you catch errors inside)
        console.error('API Error:', error);
    
        this.data_rsp = {};
        this.downloads_rsp = [];
        this.datasets_rsp = [];
        this.files_rsp = [];
        this.users_rsp = [];
        this.subject_rsp = [];
        this.filecontent_rsp = [];
        this.dataverse_rsp = {};
        this.authors_rsp = {};
    
        this.loadingService.show();
        this.firstAPIGet = false;
      }
    );
  
    this.loadingService.show();
    this.firstAPIGet = false;
  }

  @Output() messageEvent = new EventEmitter<any>();

  sendData() {
    var DataverseTabData = {
        table_data: this.dataverseCollections,
        alias_data: this.dataverseAlias,
        downloads_graph_data: this.monthlyDownloads,
        dataverse_count: this.dataverseCount,
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
        creation_date: this.creationDate,
        months: this.months,
        error_flag: this.errorFlag
    }
    console.log(DataverseTabData)
    this.messageEvent.emit({"DataverseTabData": DataverseTabData});
  }

  populateMonths() {
    this.months = [];
    let dateDiff = 24;
  
    // If startDate and endDate are provided, calculate the month difference
    if (this.start_on && this.startDate && this.endDate) {
      dateDiff = this.monthAmount(this.startDate, this.endDate);
    }
  
    // Determine the starting point for the month loop
    let upperDate = this.endDate ? new Date(Date.parse(this.endDate + "-02")) : new Date();
    console.log("months", upperDate, this.startDate, this.endDate)
  
    // If today is in the first week of the month, move the starting date back by a month
    if (new Date().getDate() < 7 && !this.start_on) {
      upperDate.setMonth(upperDate.getMonth() - 1);
    }
    console.log("months", upperDate)
  
    let foundStartMonth = false;

    console.log("months diff", dateDiff, this.startDate, this.endDate)
  
    // Loop through the months from the endDate to startDate (if provided)
    for (let i = 0; i <= dateDiff; i++) {
      const mm = upperDate.getMonth() + 1; // Get the month (1-12)
      const yyyy = upperDate.getFullYear(); // Get the year
      const dateStr = `${yyyy}-${String(mm).padStart(2, '0')}`; // Format the date as YYYY-MM
      
      console.log("months one by one", dateStr, i)
      this.months.push(dateStr);
  
      // If start_on is active and we've hit the startDate, flag it
      if (this.start_on && dateStr === this.startDate) {
        foundStartMonth = true;
      }
  
      // Move to the previous month
      upperDate.setMonth(upperDate.getMonth() - 1);
    }
  
    // Sort the months in reverse chronological order
    this.months.sort((a, b) => (a < b ? 1 : -1));
  }
  
  
  // Helper method moved outside populateMonths for clarity
  monthAmount(s1: string, s2: string): number {
    const lowerDate = new Date(Date.parse(s1 + "-01"));  // Add a dummy day to avoid time issues
    const upperDate = new Date(Date.parse(s2 + "-01"));  // Add a dummy day to avoid time issues

    let monthsDifference = (upperDate.getFullYear() - lowerDate.getFullYear()) * 12 + (upperDate.getMonth() - lowerDate.getMonth());
    if (monthsDifference === 0) {
        return 1;
    }
    if (monthsDifference === 1) {
        return 2;
    }
    return Math.abs(monthsDifference) + 1;
}

  cleanTempData() {
    // Collections and dropdown data
    this.dataverseCollectionsDropDown = [];
    this.dataverseCollections = [];
    this.dataverseAlias = [];
    this.dataversesDataTree = [];
  
    // API response placeholders
    this.dataverse_rsp = [];
    this.filecontent_rsp = [];
    this.filecontent_rsp_date_range = [];
    this.observables = [];
  
    // Monthly data arrays
    this.monthlyDownloads = [];
    this.monthlyDatasets = [];
    this.monthlyFiles = [];
    this.monthlyUsers = [];
    this.monthlySize = [];
  
    this.monthlyAggDownloads = [];
    this.monthlyAggDatasets = [];
    this.monthlyAggFiles = [];
    this.monthlyAggUsers = [];
    this.monthlyAggSize = [];
  
    // Dataset-related
    this.datasetURL = '';
    this.datasetsContents = [];
    this.datasets = [];
  
    // Subject-related
    this.subjectURL = '';
    this.subjectContents = [];
    this.subjectLabels = [];
    this.subjectData = [];
    this.subjectContentFullData = [];
  
    // File content-related
    this.fileContentURL = '';
    this.fileContentHash = {};
    this.fileSizeHash = {};
    this.fileContentDetailHash = {};
    this.fileContentLabels = [];
    this.fileContentData = [];
    this.fileContentFullData = [];
  
    // Counters and flags
    this.dataverseCount = 0;
  
    // Other
    this.months = [];
    this.creation_date_rs = "";
    this.creationDate = ""; 
    this.errorFlag = false;
  }

  get cleanedParentAlias(): string {
    return this.collectionSelected === '(All)' ? '' : this.collectionSelected;
  }

  findAliasRow(arr: Array<any>, target: String){
    for (let i = 0; i <= arr.length; i++){
      if (arr[i] && arr[i]['alias'] === target){
        return(i)
      }
    }
    return(-1)
  }

}
