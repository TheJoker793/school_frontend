import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaisonRoutingModule } from './saison-routing.module';
import { MainSaisonComponent } from './main-saison/main-saison.component';
import { ListSaisonComponent } from './list-saison/list-saison.component';
import { AddSaisonComponent } from './add-saison/add-saison.component';
import { UpdateSaisonComponent } from './update-saison/update-saison.component';
import { DetailSaisonComponent } from './detail-saison/detail-saison.component';


@NgModule({
  declarations: [
    MainSaisonComponent,
    ListSaisonComponent,
    AddSaisonComponent,
    UpdateSaisonComponent,
    DetailSaisonComponent
  ],
  imports: [
    CommonModule,
    SaisonRoutingModule
  ]
})
export class SaisonModule { }
