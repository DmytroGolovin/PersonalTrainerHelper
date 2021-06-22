import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2GoalsComponent } from './step2-goals.component';

describe('Step2GoalsComponent', () => {
  let component: Step2GoalsComponent;
  let fixture: ComponentFixture<Step2GoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step2GoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2GoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
