import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainParentComponent } from './main-parent/main-parent.component';
import { ListParentComponent } from './list-parent/list-parent.component';
import { DetailParentComponent } from './detail-parent/detail-parent.component';
import { UpdateParentComponent } from './update-parent/update-parent.component';
import { AddParentComponent } from './add-parent/add-parent.component';

const routes: Routes = [
  {
    path:'',
    component:MainParentComponent,
    children:[
      {
        path:'list',
        component:ListParentComponent
      },
      {
        path:'add',
        component:AddParentComponent
      },
      {
        path:'update/:id',
        component:UpdateParentComponent
      },
      {
        path:':id',
        component:DetailParentComponent
      },
      
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
