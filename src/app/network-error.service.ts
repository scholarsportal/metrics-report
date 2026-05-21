import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NetworkErrorService {
  private _visible$ = new BehaviorSubject<boolean>(false);
  readonly visible$ = this._visible$.asObservable();

  show(): void {
    this._visible$.next(true);
  }

  dismiss(): void {
    this._visible$.next(false);
  }
}
