import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';

import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../shared/guards/auth.guard';

import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ClientsComponent } from './clients/clients.component';
import { ClientCreateComponent } from './clients/client-create/client-create.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { ClientsResolver } from '../shared/resolvers/clients-resolver';
import { Step1GeneralDataComponent } from './clients/client-create/step1-general-data/step1-general-data.component';
import { Step2GoalsComponent } from './clients/client-create/step2-goals/step2-goals.component';
import { Step3SummaryComponent } from './clients/client-create/step3-summary/step3-summary.component';

import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseCreateComponent } from './exercises/exercise-create/exercise-create.component';
import { ExerciseDetailsComponent } from './exercises/exercise-details/exercise-details.component';
import { ExercisesResolver } from '../shared/resolvers/exercises-resolver';
import { Step1ExerciseGeneralDataComponent } from './exercises/exercise-create/step1-exercise-general-data/step1-exercise-general-data.component';
import { Step3ExerciseSummaryComponent } from './exercises/exercise-create/step3-exercise-summary/step3-exercise-summary.component';
import { Step2ExerciseVideoUploadComponent } from './exercises/exercise-create/step2-exercise-video-upload/step2-exercise-video-upload.component';

import { PlansComponent } from './plans/plans.component';

import { ChartjsModule } from '@ctrl/ngx-chartjs';
import { BarController, BarElement, Chart, Title, Tooltip, Legend, CategoryScale, LinearScale, LineController, PointElement, LineElement, ArcElement, PieController } from 'chart.js';

Chart.register(
  BarController, 
  BarElement, 
  CategoryScale, 
  LineController, 
  LineElement, 
  PointElement, 
  LinearScale,
  PieController,
  ArcElement,
  Title, Tooltip, Legend);

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
    Step3SummaryComponent, 
    ClientDetailsComponent, 
    ExerciseCreateComponent, 
    ExerciseDetailsComponent, 
    Step1ExerciseGeneralDataComponent, 
    Step3ExerciseSummaryComponent, 
    Step2ExerciseVideoUploadComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    NgbModule,
    MatStepperModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    ChartjsModule
  ],
  providers: [
    AuthGuard,
    ClientsResolver,
    ExercisesResolver,
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class PagesModule { }
