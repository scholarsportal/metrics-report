import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalBarGraphComponent } from './horizontal-bar-graph.component';

describe('HorizontalBarGraphComponent', () => {
  let component: HorizontalBarGraphComponent;
  let fixture: ComponentFixture<HorizontalBarGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalBarGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
