import { RouterModule, Routes } from "@angular/router";
import { CalendrierComponent } from "./calendrier/calendrier.component";
import { AddSessionComponent } from "./espace-admin/add-session/add-session.component";
import { EnseignantsComponent } from "./espace-admin/enseignants/enseignants.component";
import { EtudiantsComponent } from "./espace-admin/etudiants/etudiants.component";
import { PfeComponent } from "./espace-admin/pfe/pfe.component";
import { SoutenancesComponent } from "./espace-admin/soutenances/soutenances.component";

const APP_ROUTING: Routes = [
  /*    { path: 'acceuil', component: AcceuilComponent },
      { path: 'validationPFE', component: ValidationPFEComponent },
      { path: 'listePFE', component: ListePFEComponent },
      { path: 'soutenances', component: SoutenancesComponent},
      { path: 'calendrier', component : CalendrierComponent },
      // { path: 'deconnexion'},
  */
  {
    path: 'admin', children: [
      { path: 'etudiants', component: EtudiantsComponent },
      { path: 'enseignants', component: EnseignantsComponent },
      { path: 'pfe', component: PfeComponent },
      { path: 'soutenances', component: SoutenancesComponent },
      { path: 'addSession', component: AddSessionComponent },      
    ]
  },
  { path: 'calendrier', component: CalendrierComponent },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
