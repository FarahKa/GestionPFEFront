import { RouterModule, Routes } from "@angular/router";
import { CalendrierComponent } from "./calendrier/calendrier.component";
import { AddSessionComponent } from "./espace-admin/add-session/add-session.component";
import { EnseignantsComponent } from "./espace-admin/enseignants/enseignants.component";
import { EtudiantsComponent } from "./espace-admin/etudiants/etudiants.component";
import { PfeComponent } from "./espace-admin/pfe/pfe.component";
import { SoutenancesComponent } from "./espace-admin/soutenances/soutenances.component";
import { DetailPfeComponent } from "./espace-etudiant/detail-pfe/detail-pfe.component";
import { DetailSoutenanceComponent } from "./espace-etudiant/detail-soutenance/detail-soutenance.component";
import { EditPfeComponent } from "./espace-etudiant/edit-pfe/edit-pfe.component";
import { EspaceEtudiantModule } from "./espace-etudiant/espace-etudiant.module";
import { EspaceEtudiantComponent } from "./espace-etudiant/espace-etudiant/espace-etudiant.component";

const APP_ROUTING: Routes = [
  {
    path: 'admin', children: [
      { path: 'etudiants', component: EtudiantsComponent },
      { path: 'enseignants', component: EnseignantsComponent },
      { path: 'pfe', component: PfeComponent },
      { path: 'pfe/:option/:filiere', component: PfeComponent}, // for sidebar navigation
      { path: 'soutenances', component: SoutenancesComponent },
      { path: 'addSession', component: AddSessionComponent },      
    ]
  },
  { path: 'calendrier', component: CalendrierComponent },
  { path: 'etudiant', component: EspaceEtudiantComponent,
  children: [
    {
        path: '',
        component: DetailPfeComponent,
    },
    {
      path: 'detailSoutenance',
      component: DetailSoutenanceComponent,
  },
 
    
]}

];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
