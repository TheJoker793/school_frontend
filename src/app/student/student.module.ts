import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { MainStudentComponent } from './main-student/main-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainStudentComponent,
    AddStudentComponent,
    ListStudentComponent,
    UpdateStudentComponent,
    DetailStudentComponent
  ],
  imports: [
    
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
