import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssiduiteRoutingModule } from './assiduite-routing.module';
import { ListAssiduiteComponent } from './list-assiduite/list-assiduite.component';
import { AddAssiduiteComponent } from './add-assiduite/add-assiduite.component';
import { UpdateAssiduiteComponent } from './update-assiduite/update-assiduite.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConvertTimePipe } from './convert-time.pipe';


@NgModule({
  declarations: [
    
  
    ListAssiduiteComponent,
    AddAssiduiteComponent,
    UpdateAssiduiteComponent,
    ConvertTimePipe
  ],
  imports: [
    CommonModule,
    AssiduiteRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class AssiduiteModule { }
