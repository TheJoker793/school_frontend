import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFraisComponent } from './all-frais/all-frais.component';
import { AddFraisComponent } from './add-frais/add-frais.component';
import { UpdateFraisComponent } from './update-frais/update-frais.component';

const routes: Routes = [
  {
    path:'',
    component:AllFraisComponent    
  },{
    path:'add',
    component:AddFraisComponent
  },
  {
    path:':id',
    component:UpdateFraisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FraisRoutingModule { }
