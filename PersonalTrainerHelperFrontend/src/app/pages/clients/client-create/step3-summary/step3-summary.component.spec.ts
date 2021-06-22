import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3SummaryComponent } from './step3-summary.component';

describe('Step3SummaryComponent', () => {
  let component: Step3SummaryComponent;
  let fixture: ComponentFixture<Step3SummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step3SummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step3SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});