import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NetworkErrorService } from './network-error.service';

@Injectable()
export class NetworkErrorInterceptor implements HttpInterceptor {
  constructor(private networkErrorService: NetworkErrorService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        const isCorsOrNetwork =
          error.status === 0 ||
          error.status === 200 ||   // ERR_FAILED 200 — browser blocked a "successful" response
          (error.error instanceof ProgressEvent && error.error.type === 'error');

        if (isCorsOrNetwork) {
          this.networkErrorService.show();
        }

        return throwError(() => error);
      })
    );
  }
}