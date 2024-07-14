import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllReglementsComponent } from './all-reglements/all-reglements.component';
import { AddReglementComponent } from './add-reglement/add-reglement.component';
import { UpdateReglementComponent } from './update-reglement/update-reglement.component';

const routes: Routes = [
  {
    path:'',
    component:AllReglementsComponent
  },
  {
    path:'add',
    component:AddReglementComponent
  },
  {
    path:':id',
    component:UpdateReglementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReglementRoutingModule { }
