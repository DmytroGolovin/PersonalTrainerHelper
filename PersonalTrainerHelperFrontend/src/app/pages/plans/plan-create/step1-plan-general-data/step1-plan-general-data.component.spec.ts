import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1PlanGeneralDataComponent } from './step1-plan-general-data.component';

describe('Step1PlanGeneralDataComponent', () => {
  let component: Step1PlanGeneralDataComponent;
  let fixture: ComponentFixture<Step1PlanGeneralDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step1PlanGeneralDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1PlanGeneralDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
