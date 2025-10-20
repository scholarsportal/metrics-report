import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  
  private downloadSubjectTrigger = new Subject<void>();

  public get downloadSubjectTriggered$(): Observable<void> {
    return this.downloadSubjectTrigger.asObservable();
  }

  private downloadFileTrigger = new Subject<void>();

  public get downloadFileTriggered$(): Observable<void> {
    return this.downloadFileTrigger.asObservable();
  }

  private downloadExcelTrigger = new Subject<void>();

  public get downloadExcelTriggered$(): Observable<void> {
    return this.downloadExcelTrigger.asObservable();
  }

  private downloadPDFTrigger = new Subject<void>();

  public get downloadPDFTriggered$(): Observable<void> {
    return this.downloadPDFTrigger.asObservable();
  }

  triggerGenerateSubject() {
    this.downloadSubjectTrigger.next();
  }

  triggerGenerateFile() {
    this.downloadFileTrigger.next();
  }

  triggerGenerateExcel() {
    this.downloadExcelTrigger.next();
  }

  triggerGeneratePDF() {
    this.downloadPDFTrigger.next();
  }

}
