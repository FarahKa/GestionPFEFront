import { elementEventFullName } from "@angular/compiler/src/view_compiler/view_compiler";
import { RouterModule, Routes } from "@angular/router";
import { CalendrierComponent } from "./calendrier/calendrier.component";
import { AddSessionComponent } from "./espace-admin/add-session/add-session.component";
import { EnseignantsComponent } from "./espace-admin/enseignants/enseignants.component";
import { EspaceAdminComponent } from "./espace-admin/espace-admin/espace-admin.component";
import { EtudiantsComponent } from "./espace-admin/etudiants/etudiants.component";
import { ModifySoutenanceComponent } from "./espace-admin/modify-soutenance/modify-soutenance.component";
import { PfeComponent } from "./espace-admin/pfe/pfe.component";
import { SoutenancesComponent } from "./espace-admin/soutenances/soutenances.component";
import { DetailPfeComponent } from "./espace-etudiant/detail-pfe/detail-pfe.component";
import { DetailSoutenanceComponent } from "./espace-etudiant/detail-soutenance/detail-soutenance.component";
import { EditPfeComponent } from "./espace-etudiant/edit-pfe/edit-pfe.component";
import { EspaceEtudiantModule } from "./espace-etudiant/espace-etudiant.module";
import { EspaceEtudiantComponent } from "./espace-etudiant/espace-etudiant/espace-etudiant.component";
import { ListeEnseignantComponent } from "./shared/liste-enseignant/liste-enseignant.component";
import { ListePfesComponent } from "./shared/liste-pfes/liste-pfes.component";

const APP_ROUTING: Routes = [
  {
    path: 'admin', children: [
      { path: 'etudiants', component: EtudiantsComponent },
      { path: 'enseignants', component: EnseignantsComponent },
      { path: 'pfe', component: PfeComponent },
      { path: 'soutenances', component: SoutenancesComponent },
      { path: 'addSession', component: AddSessionComponent },
      {path: 'modifySoutenance', component: ModifySoutenanceComponent}
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
 
    
]},
{path: 'enseignants', component: ListeEnseignantComponent},
{path: 'pfes', component: ListePfesComponent}

];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
