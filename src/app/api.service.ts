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
    const perPage = 1000;
    const maxPages = 30;
  
    const fetchPage = (start: number): Observable<{ items: DatasetItem[]; start: number; page: number }> => {
      return this.getDatasets(parentAlias, start, perPage).pipe(
        map(response => ({
          items: response?.data?.items || [],
          start,
          page: start / perPage
        }))
      );
    };
  
    return fetchPage(0).pipe(
      expand(({ items, start, page }) => {
        if (items.length < perPage || page >= maxPages) {
          return EMPTY;
        }
        return fetchPage(start + perPage);
      }),
      reduce((acc, { items }) => {
        items.forEach((item: DatasetItem) => {
          const pubDate = item.published_at || item.publicationDate;
          if (!pubDate) return;
  
          const month = pubDate.slice(0, 7);
          if (!acc[month]) acc[month] = new Set<string>();
  
          const authors = item.authors || [];
          authors.forEach((author: string) => {
            const trimmed = author.trim().toLowerCase();
            if (trimmed) acc[month].add(trimmed);
          });
        });
        return acc;
      }, {} as { [month: string]: Set<string> }),
      map(authorsByMonth => {
        const months = Object.keys(authorsByMonth).sort();
      
        if (months.length === 0) {
          return { data: [{ date: '', count: 0 }] };
        }
      
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
        
        // Get current month in 'YYYY-MM' format
        const now = new Date();
        const currentMonth = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}`;
      
        const cumulativeAuthors = new Set<string>();
        const result: { date: string; count: number }[] = [];
      
        let current = firstMonth;
        while (current <= currentMonth) {
          if (authorsByMonth[current]) {
            authorsByMonth[current].forEach(author => cumulativeAuthors.add(author));
            result.push({ date: current, count: cumulativeAuthors.size });
          } else {
            // No data for this month — count is cumulative count or zero if empty
            result.push({ date: current, count: cumulativeAuthors.size || 0 });
          }
          current = nextMonth(current);
        }
      
        return { data: result };
      })
    );
  }
  
  getAllMetrics(parentAlias: string = '', toMonth: string = ''): Observable<any[]> {
    const authorOrUser$ = parentAlias
      ? this.getUniqueAuthors(parentAlias).pipe(catchError(() => of({})))
      : this.getMonthlyUsers(parentAlias).pipe(catchError(() => of({})));
  
    return forkJoin([
      this.getDataverseCollections().pipe(catchError(() => of({}))),
      this.getMonthlyDownloads(parentAlias).pipe(catchError(() => of({}))),
      this.getMonthlyDatasets(parentAlias).pipe(catchError(() => of({}))),
      this.getMonthlyFiles(parentAlias).pipe(catchError(() => of({}))),
      authorOrUser$,
      this.getSubjectData(toMonth, parentAlias).pipe(catchError(() => of({}))),
      this.getFileContentData(parentAlias).pipe(catchError(() => of({}))),
      this.getDataverseCount(toMonth, parentAlias).pipe(catchError(() => of({}))),
    ]);
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
}