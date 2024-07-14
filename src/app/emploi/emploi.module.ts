import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmploiRoutingModule } from './emploi-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AllEmploisComponent } from './all-emplois/all-emplois.component';
import { AddEmploiComponent } from './add-emploi/add-emploi.component';
import { UpdateEmploiComponent } from './update-emploi/update-emploi.component';
import { DetailEmploiComponent } from './detail-emploi/detail-emploi.component';


@NgModule({
  declarations: [
    AllEmploisComponent,
    AddEmploiComponent,
    UpdateEmploiComponent,
    DetailEmploiComponent
  ],
  imports: [
    CommonModule,
    EmploiRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmploiModule { }
