import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiplomeRoutingModule } from './diplome-routing.module';
import { AddDiplomeComponent } from './add-diplome/add-diplome.component';
import { UpdateDiplomeComponent } from './update-diplome/update-diplome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllDiplomeComponent } from './all-diplome/all-diplome.component';


@NgModule({
  declarations: [
    AllDiplomeComponent,
    AddDiplomeComponent,
    UpdateDiplomeComponent
  ],
  imports: [
    CommonModule,
    DiplomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class DiplomeModule { }
