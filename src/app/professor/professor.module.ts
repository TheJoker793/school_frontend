import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorRoutingModule } from './professor-routing.module';
import { MainProfessorComponent } from './main-professor/main-professor.component';
import { ListProfessorComponent } from './list-professor/list-professor.component';
import { AddProfessorComponent } from './add-professor/add-professor.component';
import { DetailProfessorComponent } from './detail-professor/detail-professor.component';
import { UpdateProfessorComponent } from './update-professor/update-professor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DiplomeModule } from '../diplome/diplome.module';


@NgModule({
  declarations: [
    MainProfessorComponent,
    ListProfessorComponent,
    AddProfessorComponent,
    DetailProfessorComponent,
    UpdateProfessorComponent
  ],
  imports: [
    CommonModule,
    ProfessorRoutingModule,
    ReactiveFormsModule,
    DiplomeModule
  ]
})
export class ProfessorModule { }
