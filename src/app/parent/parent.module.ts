import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { MainParentComponent } from './main-parent/main-parent.component';
import { ListParentComponent } from './list-parent/list-parent.component';
import { DetailParentComponent } from './detail-parent/detail-parent.component';
import { UpdateParentComponent } from './update-parent/update-parent.component';
import { AddParentComponent } from './add-parent/add-parent.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    
  
    MainParentComponent,
             ListParentComponent,
             DetailParentComponent,
             UpdateParentComponent,
             AddParentComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule,
    ReactiveFormsModule
  ]
})
export class ParentModule { }
