import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1GeneralDataComponent } from './step1-general-data.component';

describe('Step1GeneralDataComponent', () => {
  let component: Step1GeneralDataComponent;
  let fixture: ComponentFixture<Step1GeneralDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step1GeneralDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1GeneralDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
