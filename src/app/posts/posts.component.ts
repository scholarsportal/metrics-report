import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, EventEmitter, Output } from '@angular/core';
import { IntervalHistogram } from 'perf_hooks';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  httpClient = inject(HttpClient);
  public data: Array<any> = [];
  public months: Array<any> = [];
  public monthsDate: Array<any> = [];
  public dataverseCollectionsURL: string = '';
  public monthsDateURLS: Array<any> = [];
  public monthlyDownloads: Array<any> = []; 
  public observables: Array<any> = [];

  public dataversesDataTree: Array<any> = [];
  public dataverseCollections: Array<any> = [];

  public today = new Date();
  public mm = this.today.getMonth() + 1;
  public yyyy = this.today.getFullYear()
    
  ngOnInit() {

    this.dataverseCollectionsURL = 'https://borealisdata.ca/api/info/metrics/tree'; 
    this.populateMonths();
    for (let i = 0; i <= 11; i++){
      this.monthsDateURLS.push('https://borealisdata.ca/api/info/metrics/downloads/toMonth/' + this.months[i])
    }

    this.observables.push(this.httpClient.get<[]>(this.dataverseCollectionsURL));
    var $monthsDateOb: Array<any> = [];
    for (let i = 0; i <= 11; i++){
      this.observables.push(this.httpClient.get<[]>(this.monthsDateURLS[i]))
    }

    console.log(this.observables)

    forkJoin(this.observables).subscribe(
      (rep) => {
          const responses = rep as any as any[];
          console.log('hello,', responses); 
          console.log(responses[1]);
          this.data = responses[0]['data'];
          this.dataversesDataTree = responses[0]['data']['children']
          for (let i = 0; i < this.dataversesDataTree.length; i++){
            this.dataverseCollections.push(
              {name: this.dataversesDataTree[i]['name'],
               views: (Math.floor(Math.random() * 5000)) + 20,
               downloads: (Math.floor(Math.random() * 300)) + 2,
               citations: (Math.floor(Math.random() * 20))
              }
            )
          }
          for (let i = 0; i <= 11; i++){
            this.monthlyDownloads.push({month: this.months[i], count: responses[i+1]['data']['count']});
          }
          this.sendData();
      },
      err => console.error(err)
   );
    
    /*
    this.populateMonths();
    for (let i = 0; i <= 11; i++){
      await this.getMontlyDataverseN(i).then(response => console.log(this.dataverseCollections[i]));
    }
    */

    /*
    this.httpClient.get('https://borealisdata.ca/api/info/metrics/tree')
      .subscribe({
        next: (data: any) => {
          this.data = data['data'];
          this.dataversesDataTree = data['data']['children']
          for (let i = 0; i < this.dataversesDataTree.length; i++){
            this.dataverseCollections.push(
              {name: this.dataversesDataTree[i]['name'],
               views: (Math.floor(Math.random() * 5000)) + 20,
               downloads: (Math.floor(Math.random() * 300)) + 2,
               citations: (Math.floor(Math.random() * 20))
          })
          }
          console.log(this.dataverseCollections);
          this.sendData();
        }, error: (err) => console.log(err)
      });

    for (let i = 0; i <= 11; i++){

      this.httpClient.get('https://borealisdata.ca/api/info/metrics/downloads/toMonth/' + this.months[i])
      .subscribe({
        next: (data: any) => {
          this.data = data['data'];
          var count = data['data']['count']
          this.monthlyDownloads.push({month: this.months[i], count: count})
          console.log({month: this.months[i], count: count});
          this.sendData();
        }, error: (err) => console.log(err)
      });
    }

    console.log(this.monthlyDownloads);

  }
  */

  }

  @Output() messageEvent = new EventEmitter<any>();

  sendData() {
    var DataverseTabData = {
        table_data: this.dataverseCollections,
        graph_data: this.monthlyDownloads    
    }
    this.messageEvent.emit(DataverseTabData);
  }

  populateMonths(){
    for (let i = 0; i <=11; i++){
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

  async getCollections(){
    /*
    .subscribe({
      next: (data: any) => {
        this.data = data['data'];
        this.dataversesDataTree = data['data']['children']
        for (let i = 0; i < this.dataversesDataTree.length; i++){
          this.dataverseCollections.push(
            {name: this.dataversesDataTree[i]['name'],
             views: (Math.floor(Math.random() * 5000)) + 20,
             downloads: (Math.floor(Math.random() * 300)) + 2,
             citations: (Math.floor(Math.random() * 20))
        })
        }
        this.sendData();
      }, error: (err) => console.log(err) 
    });
    */
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

}
