import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasseRoutingModule } from './classe-routing.module';
import { AllClassesComponent } from './all-classes/all-classes.component';
import { AddClasseComponent } from './add-classe/add-classe.component';
import { UpdateClasseComponent } from './update-classe/update-classe.component';


@NgModule({
  declarations: [
    AllClassesComponent,
    AddClasseComponent,
    UpdateClasseComponent
  ],
  imports: [
    CommonModule,
    ClasseRoutingModule
  ]
})
export class ClasseModule { }
