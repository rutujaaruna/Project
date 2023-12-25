import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { ReactiveFormsModule } from '@angular/forms';

const RegistrationRouting : Routes =[
  {
    path:'',
    component:RegistrationComponent
  }
]

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    RouterModule.forChild(RegistrationRouting),
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RegistrationModule { }
