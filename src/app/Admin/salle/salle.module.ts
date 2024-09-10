import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalleRoutingModule } from './salle-routing.module';
import { AddSalleComponent } from './add-salle/add-salle.component';
import { AllSalleComponent } from './all-salle/all-salle.component';
import { UpdateSalleComponent } from './update-salle/update-salle.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddSalleComponent,
    AllSalleComponent,
    UpdateSalleComponent
  ],
  imports: [
    CommonModule,
    SalleRoutingModule,
    ReactiveFormsModule
  ]
})
export class SalleModule { }
