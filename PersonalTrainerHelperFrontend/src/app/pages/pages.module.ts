import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ClientsComponent } from './clients/clients.component';
import { PlansComponent } from './plans/plans.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../shared/guards/auth.guard';
import { ClientCreateComponent } from './clients/client-create/client-create.component';
import { Step1GeneralDataComponent } from './clients/client-create/step1-general-data/step1-general-data.component';
import { Step2GoalsComponent } from './clients/client-create/step2-goals/step2-goals.component';
import { Step3SummaryComponent } from './clients/client-create/step3-summary/step3-summary.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';


@NgModule({
  declarations: [
    HomeComponent, 
    MessagesComponent, 
    ClientsComponent, 
    PlansComponent, 
    ExercisesComponent, 
    LoginComponent, 
    ClientCreateComponent, 
    Step1GeneralDataComponent, 
    Step2GoalsComponent, 
    Step3SummaryComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    NgbModule,
    MatStepperModule,
    MatIconModule
  ],
  providers: [
    AuthGuard,
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class PagesModule { }
