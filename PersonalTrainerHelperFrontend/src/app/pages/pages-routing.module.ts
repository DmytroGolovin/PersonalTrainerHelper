import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlansComponent } from './plans/plans.component';
import { ClientsComponent } from './clients/clients.component';
import { MessagesComponent } from './messages/messages.component';
import { ExercisesComponent } from './exercises/exercises.component';

import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ClientsResolver } from '../shared/resolvers/clients-resolver';
import { ExercisesResolver } from '../shared/resolvers/exercises-resolver';
import { PlansResolver } from '../shared/resolvers/plans-resolver';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutsResolver } from '../shared/resolvers/workouts-resolver';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      // products: ProductsResolver
    },
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    }
  },
  {
    path: 'clients',
    component: ClientsComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    },
    // resolve: {
    //   clients: ClientsResolver
    // },
  },
  {
    path: 'exercises',
    component: ExercisesComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    },
    resolve: {
      exercises: ExercisesResolver
    },
  },
  {
    path: 'workouts',
    component: WorkoutComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    },
    resolve: {
      workouts: WorkoutsResolver
    },
  },
  {
    path: 'plans',
    component: PlansComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    },
    resolve: {
      plans: PlansResolver
    },
  },
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    }
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
