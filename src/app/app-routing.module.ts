import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    
  },
  {
    path:"students",
    loadChildren:()=>import('./student/student.module').then(ms=>ms.StudentModule)
  },
  {
    path:"professors",
    loadChildren:()=>import('./professor/professor.module').then(pm=>pm.ProfessorModule)
  },
  {
    path:'saisons',
    loadChildren:()=>import('./saison/saison.module').then(s=>s.SaisonModule)
    
  },
  {
    path:"parents",
    loadChildren:()=>import('./parent/parent.module').then(p=>p.ParentModule)
  },
  {
    path:"classes",
    loadChildren:()=>import('./Admin/classe/classe.module').then(c=>c.ClasseModule)
  },
  {
    path:"salles",
    loadChildren:()=>import('./Admin/salle/salle.module').then(s=>s.SalleModule)
  },
  {
    path:'reglements',
    loadChildren:()=>import('./reglement/reglement.module').then(r=>r.ReglementModule)
  },
  {
    path:'frais',
    loadChildren:()=>import('./frais/frais.module').then(f=>f.FraisModule)
  },
  {
    path:'emplois',
    loadChildren:()=>import('./emploi/emploi.module').then(e=>e.EmploiModule)
  },
  {
    path:'matiere',
    loadChildren:()=>import('./Admin/matiere/matiere.module').then(m=>m.MatiereModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
