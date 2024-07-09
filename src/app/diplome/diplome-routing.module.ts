import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDiplomeComponent } from './all-diplome/all-diplome.component';
import { AddDiplomeComponent } from './add-diplome/add-diplome.component';
import { UpdateDiplomeComponent } from './update-diplome/update-diplome.component';

const routes: Routes = [
  {
    path:'',
    component:AllDiplomeComponent
  },
  {
    path:'add',
    component:AddDiplomeComponent
  },
  {
    path:':id',
    component:UpdateDiplomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiplomeRoutingModule { }
