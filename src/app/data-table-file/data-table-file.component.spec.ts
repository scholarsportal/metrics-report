import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableFileComponent } from './data-table-file.component';

describe('DataTableFileComponent', () => {
  let component: DataTableFileComponent;
  let fixture: ComponentFixture<DataTableFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataTableFileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTableFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
