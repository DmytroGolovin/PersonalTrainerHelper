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


@NgModule({
  declarations: [HomeComponent, MessagesComponent, ClientsComponent, PlansComponent, ExercisesComponent, LoginComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    AuthGuard
  ]
})
export class PagesModule { }
