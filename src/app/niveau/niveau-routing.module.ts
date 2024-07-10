import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNiveauxComponent } from './all-niveaux/all-niveaux.component';
import { AddNiveauxComponent } from './add-niveaux/add-niveaux.component';
import { UpdateNiveauxComponent } from './update-niveaux/update-niveaux.component';

const routes: Routes = [
  {
    path:"",
    component:AllNiveauxComponent
  },
  {
    path:"add",
    component:AddNiveauxComponent
  },
  {
    path:':id',
    component:UpdateNiveauxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NiveauRoutingModule { }
