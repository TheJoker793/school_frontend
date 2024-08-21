import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { MainStudentComponent } from './main-student/main-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SchoolModule } from '../school/school.module';
import { AssiduiteModule } from '../assiduite/assiduite.module';
import { StudentParentComponent } from './student-parent/student-parent.component';
import { StudentClassComponent } from './student-class/student-class/student-class.component';


@NgModule({
  declarations: [
    MainStudentComponent,
    AddStudentComponent,
    ListStudentComponent,
    UpdateStudentComponent,
    DetailStudentComponent,
    StudentParentComponent,
    StudentClassComponent

    
  ],
  imports: [
    
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    SchoolModule,
    AssiduiteModule,

  ]
})
export class StudentModule { }
