import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSchoolsComponent } from './all-schools/all-schools.component';
import { AddSchoolsComponent } from './add-schools/add-schools.component';
import { UpdateSchoolsComponent } from './update-schools/update-schools.component';

const routes: Routes = [
  {
    path:'',
    component:AllSchoolsComponent
  },
  {
    path:'add',
    component:AddSchoolsComponent
  },
  {
    path:':id',
    component:UpdateSchoolsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
