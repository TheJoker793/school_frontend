import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainStudentComponent } from './main-student/main-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentParentComponent } from './student-parent/student-parent.component';

const routes: Routes = [
  {
    path:'',
    component:MainStudentComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'list'
      },
      
      
      {
        path:'add',
        component:AddStudentComponent,
       
      },
      {
        path:'list',
        component:ListStudentComponent
      },
      {
        path:'schools',
        loadChildren:()=>import('../school/school.module').then(s=>s.SchoolModule)
      },
      {
        path:'discipline',
        loadChildren:()=>import('../assiduite/assiduite.module').then(a=>a.AssiduiteModule)
      },
      {
        path:'reglement',
        loadChildren:()=>import('../reglement/reglement.module').then(r=>r.ReglementModule)
      },
 
      
      {
        path:':id',
        component:DetailStudentComponent
      },
     
      {
        path:'update/:id',
        component:UpdateStudentComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
