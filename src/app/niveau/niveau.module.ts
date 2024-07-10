import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NiveauRoutingModule } from './niveau-routing.module';
import { AllNiveauxComponent } from './all-niveaux/all-niveaux.component';
import { AddNiveauxComponent } from './add-niveaux/add-niveaux.component';
import { UpdateNiveauxComponent } from './update-niveaux/update-niveaux.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllNiveauxComponent,
    AddNiveauxComponent,
    UpdateNiveauxComponent
  ],
  imports: [
    CommonModule,
    NiveauRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class NiveauModule { }
