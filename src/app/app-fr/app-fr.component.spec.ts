import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFrComponent } from './app-fr.component';

describe('AppFrComponent', () => {
  let component: AppFrComponent;
  let fixture: ComponentFixture<AppFrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
