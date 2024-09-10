import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSaisonComponent } from './main-saison/main-saison.component';
import { ListSaisonComponent } from './list-saison/list-saison.component';
import { AddSaisonComponent } from './add-saison/add-saison.component';
import { UpdateSaisonComponent } from './update-saison/update-saison.component';
import { DetailSaisonComponent } from './detail-saison/detail-saison.component';

const routes: Routes = [
  {
    path:'',
    component:MainSaisonComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'list'
      },
      {
        path:'list',
        component:ListSaisonComponent
      },
      {
        path:'add',
        component:AddSaisonComponent
      },
      {
        path:'update/:id',
        component:UpdateSaisonComponent
      },
      {
        path:':id',
        component:DetailSaisonComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaisonRoutingModule { }
