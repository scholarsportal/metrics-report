import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of, from } from 'rxjs';
import { switchMap, map, catchError, mergeMap, toArray } from 'rxjs/operators';
import { NetworkErrorService } from './network-error.service';


interface DatasetItem {
  publicationDate?: string;
  published_at?: string;
  authors?: string[];
}

interface DatasetSummary {
  global_id: any;
  name: string;
  doi: string;
  dataverse: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://borealisdata.ca/api/info/metrics';

  constructor(private http: HttpClient, private networkErrorService: NetworkErrorService) {}

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

  getDataverseInfo(alias: string = ''): Observable<{
    data: { date: string; description: string; name: string }
  }> {
    const url = `https://demo.borealisdata.ca/api/dataverses/${alias || ':root'}`;
  
    return this.http.get<any>(url).pipe(
      map(response => {
        const data = response?.data ?? {};
  
        const date = data.creationDate ?? '';
        const formattedDate = date ? date.slice(0, 7) : '';
  
        return {
          data: {
            date: formattedDate,
            description: data.description ?? '',
            name: data.name ?? ''
          }
        };
      }),
      catchError(() =>
        of({
          data: { date: '', description: '', name: '' }
        })
      )
    );
  }

  getMonthlyNewAuthorsFromCreation(
    parentAlias: string,
    endMonth?: string
  ): Observable<{ data: { date: string; count: number }[] }> {
  
    return this.getDataverseInfo(parentAlias).pipe(
      switchMap(res => {
        const creation = res?.data?.date;
  
        if (!creation || isNaN(Date.parse(`${creation}-01T00:00:00Z`))) {
          return of({ data: [] });
        }
  
        const start = new Date(`${creation}-01T00:00:00Z`);
        const end = endMonth
          ? new Date(`${endMonth}-01T00:00:00Z`)
          : new Date();
  
        const months: { label: string; from: string; to: string }[] = [];
        const cursor = new Date(start);
  
        while (cursor <= end) {
          const year = cursor.getUTCFullYear();
          const month = String(cursor.getUTCMonth() + 1).padStart(2, '0');
  
          const from = `${year}-${month}-01T00:00:00Z`;
          const next = new Date(Date.UTC(year, cursor.getUTCMonth() + 1, 1));
          const to = new Date(next.getTime() - 1).toISOString();
  
          months.push({ label: `${year}-${month}`, from, to });
  
          cursor.setUTCMonth(cursor.getUTCMonth() + 1);
        }
  
        if (!months.length) {
          return of({ data: [] });
        }
  
        return from(months).pipe(
          mergeMap(
            m =>
              this.fetchMonthAuthors(m, parentAlias).pipe(
                catchError(() => of(new Set<string>())),
                map(authors => ({
                  label: m.label,
                  authors
                }))
              ),
            3
          ),
          toArray(),
  
          map(results => {
            results.sort((a, b) => a.label.localeCompare(b.label));
  
            const knownAuthors = new Set<string>();
            const monthCounts: Record<string, number> = {};
  
            // ✅ Accumulate unique authors over time
            for (const r of results) {
              for (const a of r.authors) {
                knownAuthors.add(a);
              }
              monthCounts[r.label] = knownAuthors.size;
            }
  
            // ✅ Fill missing months
            const allMonths = this.generateMonthRange(
              results[0]?.label,
              endMonth
            );
  
            let lastCount = 0;
  
            const filled = allMonths.map(m => {
              if (monthCounts[m] !== undefined) {
                lastCount = monthCounts[m];
              }
  
              return { date: m, count: lastCount };
            });
  
            return { data: filled };
          })
        );
      })
    );
  }

  private fetchMonthAuthors(
    m: { from: string; to: string },
    parentAlias: string
  ): Observable<Set<string>> {
    return this.http.get<any>('https://demo.borealisdata.ca/api/search', {
      params: {
        q: '*',
        type: 'dataset',
        per_page: '1000',
        subtree: parentAlias,
        fq: `dateSort:[${m.from} TO ${m.to}]`,
        page: '1'
      }
    }).pipe(
      switchMap(res => {
        const totalCount = res?.data?.total_count ?? 0;
        const pages = Math.ceil(totalCount / 1000);
        const pageCalls = Array.from({ length: pages }, (_, i) =>
          this.http.get<any>('https://demo.borealisdata.ca/api/search', {
            params: {
              q: '*',
              type: 'dataset',
              per_page: '1000',
              subtree: parentAlias,
              fq: `dateSort:[${m.from} TO ${m.to}]`,
              page: String(i + 1)
            }
          })
        );

        return forkJoin(pageCalls).pipe(
          map(responses => {
            const authorsThisMonth = new Set<string>();
            responses.forEach(r => {
              (r.data.items ?? []).forEach((item: any) => {
                (item.authors ?? []).forEach((name: string) => {
                  const normalized = name.toLowerCase().replace(/[^\w\s]/g, '').trim();
                  if (normalized) authorsThisMonth.add(normalized);
                });
              });
            });
            return authorsThisMonth;
          })
        );
      })
    );
  }

  private generateMonthRange(start: string, end?: string): string[] {
    const startDate = new Date(start + '-01T00:00:00Z');
    const endDate = end ? new Date(end + '-01T00:00:00Z') : new Date();
    const months: string[] = [];

    const cursor = new Date(startDate);
    while (cursor <= endDate) {
      const year = cursor.getUTCFullYear();
      const month = String(cursor.getUTCMonth() + 1).padStart(2, '0');
      months.push(`${year}-${month}`);
      cursor.setUTCMonth(cursor.getUTCMonth() + 1);
    }

    return months;
  }

  getAllMetrics(
    parentAlias: string = '',
    toMonth: string = ''
  ): Observable<{ data: any[]; errorOccurredFlag: boolean }> {
    let errorOccurredFlag = false;
    const setError = () => (errorOccurredFlag = true);

    const calls: Observable<any>[] = [
      this.withErrorHandling(this.getDataverseCollections(), setError, 'getDataverseCollections'),
      this.withErrorHandling(this.getMonthlyDownloads(parentAlias), setError, 'getMonthlyDownloads'),
      this.withErrorHandling(this.getMonthlyDatasets(parentAlias), setError, 'getMonthlyDatasets'),
      this.withErrorHandling(this.getMonthlyFiles(parentAlias), setError, 'getMonthlyFiles'),
      // Slot for users/authors, always same position
      this.withErrorHandling(
        parentAlias
          ? this.getMonthlyNewAuthorsFromCreation(parentAlias)
          : this.getMonthlyUsers(''),
        setError,
        parentAlias ? 'getMonthlyNewAuthorsFromCreation' : 'getMonthlyUsers'
      ),
      this.withErrorHandling(this.getSubjectData(toMonth, parentAlias), setError, 'getSubjectData'),
      this.withErrorHandling(this.getFileContentData(parentAlias), setError, 'getFileContentData'),
      this.withErrorHandling(this.getDataverseCount(toMonth, parentAlias), setError, 'getDataverseCount'),
      this.withErrorHandling(this.getDataverseInfo(parentAlias), setError, 'getDataverseInfo'),
    ];

    return forkJoin(calls).pipe(
      map(results => ({
        data: results,
        errorOccurredFlag
      }))
    );
  }

  private withErrorHandling<T>(
    obs$: Observable<T>,
    onError: () => void,
    label: string
  ): Observable<T> {
    return obs$.pipe(
      catchError(err => {
        console.error(`ERROR in ${label}`, err);
        onError();
        this.networkErrorService.show();
        return of({} as T);
      })
    );
  }

  // Existing getDatasets unchanged
  getDatasets(parentAlias: string = '', start: number = 0, perPage: number = 1000): Observable<any> {
    const url = `https://demo.borealisdata.ca/api/search`;
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

  getDatasetsWithDoiAndMetrics(): Observable<
  { name: string; dataverse: string; doi: string; views: number; downloads: number }[]> {
  return this.getDatasetsWithDoi().pipe(
    switchMap(datasets => {
      if (!datasets.length) return of([]);

      const requests = datasets.map(dataset => {
        const doi = dataset.doi;

        return forkJoin({
          views: this.getMDCViewsTotal(doi),        // returns number
          downloads: this.getMDCDownloadsTotal(doi) // returns number
        }).pipe(
          map(metrics => ({
            name: dataset.name,          // dataset title
            dataverse: dataset.dataverse, // parent dataverse
            doi,
            views: metrics.views,
            downloads: metrics.downloads
          }))
        );
      });

      return forkJoin(requests);
    })
  );
}

  getDatasetsWithDoi(
    parentAlias: string = 'toronto',
    start: number = 0,
    perPage: number = 1000
  ): Observable<DatasetSummary[]> {

  const url = 'https://borealisdata.ca/api/search';
  const params: any = {
    q: '*',
    type: 'dataset',
    start: start.toString(),
    per_page: perPage.toString()
  };

  if (parentAlias) {
    params.subtree = parentAlias;
  }

  return this.http.get<any>(url, { params }).pipe(
    map(response => {
      const items = response.data?.items ?? [];

      return items
        .filter((item: any) =>
          item.global_id?.startsWith('doi:')
        )
        .map((item: any) => ({
          name: item.name,
          doi: item.global_id,
          dataverse: item.name_of_dataverse || '-'
        }));
    })
  );
}

getMDCViewsTotal(doi: string): Observable<number> {
  const url = `https://borealisdata.ca/api/datasets/:persistentId/makeDataCount/viewsTotal?persistentId=${encodeURIComponent(doi)}`;
  return this.http.get<any>(url).pipe(
    map(res => res.data.viewsTotal ?? 0) // flatten to number
  );
}

getMDCDownloadsTotal(doi: string): Observable<number> {
  const url = `https://borealisdata.ca/api/datasets/:persistentId/makeDataCount/downloadsTotal?persistentId=${encodeURIComponent(doi)}`;
  return this.http.get<any>(url).pipe(
    map(res => res.data.downloadsTotal ?? 0) // flatten to number
  );
}

  private toNumberOrZero(value: any): number {
    const n = Number(value);
    return Number.isFinite(n) ? n : 0;
  }
}


