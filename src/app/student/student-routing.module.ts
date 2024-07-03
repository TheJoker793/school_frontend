import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainStudentComponent } from './main-student/main-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {
    path:'',
    component:MainStudentComponent,
    children:[
      
      
      {
        path:'add',
        component:AddStudentComponent
      },
      {
        path:'list',
        component:ListStudentComponent
      },
      {
        path:':id',
        component:DetailStudentComponent
      },
     
      {
        path:'update/:id',
        component:UpdateStudentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
