import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDashboardComponent } from './graph-dashboard.component';

describe('GraphDashboardComponent', () => {
  let component: GraphDashboardComponent;
  let fixture: ComponentFixture<GraphDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
