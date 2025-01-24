import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableDatasetComponent } from './data-table-dataset.component';

describe('DataTableDatasetComponent', () => {
  let component: DataTableDatasetComponent;
  let fixture: ComponentFixture<DataTableDatasetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataTableDatasetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTableDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
