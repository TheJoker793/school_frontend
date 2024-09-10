import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSeasonsComponent } from './all-seasons/all-seasons.component';

const routes: Routes = [
  {
    path:'',
    component:AllSeasonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeasonRoutingModule { }
