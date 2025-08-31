import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, EMPTY, of } from 'rxjs';
import { expand, map, reduce } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

interface DatasetItem {
  publicationDate?: string;
  published_at?: string;
  authors?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://borealisdata.ca/api/info/metrics';

  constructor(private http: HttpClient) {}

  getDataverseCollections(): Observable<any> {
    const url = `${this.baseUrl}/tree`;
    return this.http.get<any>(url);
  }

  getMonthlyDownloads(parentAlias: string): Observable<any> {
    const aliasParam = parentAlias ? `?parentAlias=${parentAlias}` : '';
    const url = `${this.baseUrl}/downloads/monthly/${aliasParam}`;
    return this.http.get<any>(url);
  }

  getMonthlyDatasets(parentAlias: string): Observable<any> {
    const aliasParam = parentAlias ? `?parentAlias=${parentAlias}` : '';
    const url = `${this.baseUrl}/datasets/monthly/${aliasParam}`;
    return this.http.get<any>(url);
  }

  getMonthlyFiles(parentAlias: string): Observable<any> {
    const aliasParam = parentAlias ? `?parentAlias=${parentAlias}` : '';
    const url = `${this.baseUrl}/files/monthly/${aliasParam}`;
    return this.http.get<any>(url);
  }

  getMonthlyUsers(parentAlias: string): Observable<any> {
    const url = `${this.baseUrl}/accounts/monthly/`;
    return this.http.get<any>(url);
  }

  getSubjectData(toMonth: string, parentAlias: string): Observable<any> {
    const aliasParam = parentAlias ? `?parentAlias=${parentAlias}` : '';
    const url = `${this.baseUrl}/datasets/bySubject/toMonth/${toMonth}${aliasParam}`;
    return this.http.get<any>(url);
  }

  getFileContentData(parentAlias: string): Observable<any> {
    const aliasParam = parentAlias ? `?parentAlias=${parentAlias}` : '';
    const url = `${this.baseUrl}/files/byType/monthly/${aliasParam}`;
    return this.http.get<any>(url);
  }

  getDataverseCount(toMonth: string, parentAlias: string): Observable<any> {
    const aliasParam = parentAlias ? `?parentAlias=${parentAlias}` : '';
    const url = `${this.baseUrl}/dataverses/toMonth/${toMonth}${aliasParam}`;
    return this.http.get<any>(url);
  }

  getUniqueAuthors(parentAlias: string): Observable<{ data: { date: string; count: number }[] }> {
    const perPage = 500;
    const maxPages = 10;
  
    const fetchPage = (start: number): Observable<DatasetItem[]> => {
      console.log(`Fetching page starting from: ${start}`);
      const startTime = Date.now();
      return this.getDatasets(parentAlias, start, perPage).pipe(
        map(response => {
          const endTime = Date.now();
          console.log(`Fetched page starting at ${start} in ${endTime - startTime}ms`);
          return response?.data?.items || [];
        })
      );
    };
  
    const pageStarts = Array.from({ length: maxPages }, (_, i) => i * perPage);
    const pageRequests = pageStarts.map(start => fetchPage(start));
  
    return forkJoin(pageRequests).pipe(
      map((pages: DatasetItem[][]) => pages.flat()),
      map((allItems: DatasetItem[]) => {
        console.log(`Total items fetched: ${allItems.length}`);
  
        const authorsByMonth: { [month: string]: Set<string> } = {};
  
        allItems.forEach(item => {
          const pubDate = item.published_at || item.publicationDate;
          if (!pubDate) return;
  
          const month = pubDate.slice(0, 7);
          if (!authorsByMonth[month]) authorsByMonth[month] = new Set();
  
          (item.authors || []).forEach(author => {
            const trimmed = author.trim().toLowerCase();
            if (trimmed) authorsByMonth[month].add(trimmed);
          });
        });
  
        return authorsByMonth;
      }),
      map(authorsByMonth => {
        const months = Object.keys(authorsByMonth).sort();
        if (months.length === 0) return { data: [{ date: '', count: 0 }] };
  
        const nextMonth = (monthStr: string): string => {
          let [year, month] = monthStr.split('-').map(Number);
          month++;
          if (month > 12) {
            month = 1;
            year++;
          }
          return `${year}-${month.toString().padStart(2, '0')}`;
        };
  
        const firstMonth = months[0];
        const now = new Date();
        const currentMonth = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}`;
  
        const cumulativeAuthors = new Set<string>();
        const result: { date: string; count: number }[] = [];
  
        let current = firstMonth;
        while (current <= currentMonth) {
          if (authorsByMonth[current]) {
            authorsByMonth[current].forEach(a => cumulativeAuthors.add(a));
          }
          result.push({ date: current, count: cumulativeAuthors.size });
          current = nextMonth(current);
        }
  
        return { data: result };
      })
    );
  }
    
  
  getAllMetrics(parentAlias: string = '', toMonth: string = ''): Observable<{ data: any[]; errorOccurredFlag: boolean }> {
    let errorOccurredFlag = false;
    const setError = () => errorOccurredFlag = true;
    
    const authorOrUser$ = parentAlias
      ? this.withErrorHandling(this.getUniqueAuthors(parentAlias), setError)
      : this.withErrorHandling(this.getMonthlyUsers(parentAlias), setError);
  
    return forkJoin([
      this.withErrorHandling(this.getDataverseCollections(), setError),
      this.withErrorHandling(this.getMonthlyDownloads(parentAlias), setError),
      this.withErrorHandling(this.getMonthlyDatasets(parentAlias), setError),
      this.withErrorHandling(this.getMonthlyFiles(parentAlias), setError),
      authorOrUser$,
      this.withErrorHandling(this.getSubjectData(toMonth, parentAlias), setError),
      this.withErrorHandling(this.getFileContentData(parentAlias), setError),
      this.withErrorHandling(this.getDataverseCount(toMonth, parentAlias), setError),
    ]).pipe(
      map(results => ({
        data: results,
        errorOccurredFlag
      }))
    );
  }

  getDatasets(parentAlias: string = '', start: number = 0, perPage: number = 1000): Observable<any> {
    const url = `https://borealisdata.ca/api/search`;
    const params: any = {
      q: '*',
      type: 'dataset',
      start: start.toString(),
      per_page: perPage.toString()
    };
  
    if (parentAlias) {
      params.subtree = parentAlias;
    }
  
    return this.http.get<any>(url, { params });
  }

  private withErrorHandling<T>(obs$: Observable<T>, onError: () => void): Observable<T> {
    return obs$.pipe(
      catchError(err => {
        onError();
        return of({} as T);
      })
    );
  }
}