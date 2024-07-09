import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAssiduiteComponent } from './list-assiduite/list-assiduite.component';
import { AddAssiduiteComponent } from './add-assiduite/add-assiduite.component';
import { UpdateAssiduiteComponent } from './update-assiduite/update-assiduite.component';

const routes: Routes = [
  {
    path:'',
    component:ListAssiduiteComponent
  },
  {
    path:'add',
    component:AddAssiduiteComponent
  },
  {
    path:':id',
    component:UpdateAssiduiteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssiduiteRoutingModule { }
