import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllClassesComponent } from './all-classes/all-classes.component';
import { AddClasseComponent } from './add-classe/add-classe.component';
import { UpdateClasseComponent } from './update-classe/update-classe.component';

const routes: Routes = [
  {
    path:"",
    component:AllClassesComponent
  },
  {
    path:"add",
    component:AddClasseComponent
  },
  {
    path:"niveaux",
    loadChildren:()=>import('../niveau/niveau.module').then(n=>n.NiveauModule)
  },
  {
    path:":id",
    component:UpdateClasseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasseRoutingModule { }
