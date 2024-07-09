import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { AllSchoolsComponent } from './all-schools/all-schools.component';
import { AddSchoolsComponent } from './add-schools/add-schools.component';
import { UpdateSchoolsComponent } from './update-schools/update-schools.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { DashboardSchoolsComponent } from './dashboard-schools/dashboard-schools.component';


@NgModule({
  declarations: [
    AllSchoolsComponent,
    AddSchoolsComponent,
    UpdateSchoolsComponent,
   // DashboardSchoolsComponent
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    ReactiveFormsModule
  ] 
})
export class SchoolModule { }
