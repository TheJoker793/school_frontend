import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatiereRoutingModule } from './matiere-routing.module';
import { MatiereComponent } from './matiere/matiere.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MatiereComponent
  ],
  imports: [
    CommonModule,
    MatiereRoutingModule,
    ReactiveFormsModule
  ]
})
export class MatiereModule { }
