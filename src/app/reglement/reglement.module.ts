import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReglementRoutingModule } from './reglement-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AllReglementsComponent } from './all-reglements/all-reglements.component';
import { AddReglementComponent } from './add-reglement/add-reglement.component';
import { UpdateReglementComponent } from './update-reglement/update-reglement.component';


@NgModule({
  declarations: [
    AllReglementsComponent,
    AddReglementComponent,
    UpdateReglementComponent
  ],
  imports: [
    CommonModule,
    ReglementRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReglementModule { }
