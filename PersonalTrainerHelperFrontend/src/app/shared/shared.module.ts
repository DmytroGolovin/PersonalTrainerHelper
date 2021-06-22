import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SideNavBarComponent, SpinnerComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideNavBarComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }