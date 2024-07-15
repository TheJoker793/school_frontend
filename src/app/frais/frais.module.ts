import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FraisRoutingModule } from './frais-routing.module';
import { AllFraisComponent } from './all-frais/all-frais.component';
import { AddFraisComponent } from './add-frais/add-frais.component';
import { UpdateFraisComponent } from './update-frais/update-frais.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllFraisComponent,
    AddFraisComponent,
    UpdateFraisComponent
  ],
  imports: [
    CommonModule,
    FraisRoutingModule,
    ReactiveFormsModule
  ]
})
export class FraisModule { }
