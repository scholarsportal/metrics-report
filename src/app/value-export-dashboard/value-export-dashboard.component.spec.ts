import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueExportDashboardComponent } from './value-export-dashboard.component';

describe('ValueExportDashboardComponent', () => {
  let component: ValueExportDashboardComponent;
  let fixture: ComponentFixture<ValueExportDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueExportDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueExportDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
