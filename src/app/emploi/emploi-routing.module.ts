import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEmploisComponent } from './all-emplois/all-emplois.component';

const routes: Routes = [
  {
    path:'',
    component:AllEmploisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmploiRoutingModule { }
