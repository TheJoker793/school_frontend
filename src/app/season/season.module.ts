import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeasonRoutingModule } from './season-routing.module';
import { AllSeasonsComponent } from './all-seasons/all-seasons.component';
import { UpdateSeasonComponent } from './update-season/update-season.component';
import { AddSeasonComponent } from './add-season/add-season.component';


@NgModule({
  declarations: [
    AllSeasonsComponent,
    UpdateSeasonComponent,
    AddSeasonComponent
  ],
  imports: [
    CommonModule,
    SeasonRoutingModule
  ]
})
export class SeasonModule { }
