import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProfessorComponent } from './main-professor/main-professor.component';
import { AddProfessorComponent } from './add-professor/add-professor.component';
import { ListProfessorComponent } from './list-professor/list-professor.component';
import { DetailProfessorComponent } from './detail-professor/detail-professor.component';

const routes: Routes = [
  {
    path:'',
    component:MainProfessorComponent,
    children:[
      {
        path:'add',
        component:AddProfessorComponent
      },
      {
        path:'list',
        component:ListProfessorComponent
      },
      {
        path:':id',
        component:DetailProfessorComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
