import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSalleComponent } from './all-salle/all-salle.component';
import { AddSalleComponent } from './add-salle/add-salle.component';
import { UpdateSalleComponent } from './update-salle/update-salle.component';

const routes: Routes = [
  {
    path:'',
    component:AllSalleComponent
  },
  {
    path:'add',
    component:AddSalleComponent
  },
  {
    path:':id',
    component:UpdateSalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalleRoutingModule { }
