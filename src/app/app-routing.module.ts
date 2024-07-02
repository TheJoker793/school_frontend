import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    
  },
  {
    path:"students",
    loadChildren:()=>import('./student/student.module').then(ms=>ms.StudentModule)
  },
  {
    path:"professors",
    loadChildren:()=>import('./professor/professor.module').then(pm=>pm.ProfessorModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
