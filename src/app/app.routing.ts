import { AcceuilComponent } from './acceuil/acceuil.component';
import { AppComponent } from './app.component';
import { ImportComponent } from './espace-admin/import/import.component';
import { AdminsComponent } from './espace-admin/admins/admins.component';
import { AuthGuard } from './guard/auth.guard';
import { Role } from './models/role.model';
import { RegisterComponent } from './espace-admin/register/register.component';
import { LoginComponent } from './login/login.component';

import { elementEventFullName } from "@angular/compiler/src/view_compiler/view_compiler";
import { RouterModule, Routes } from "@angular/router";
import { CalendrierComponent } from "./calendrier/calendrier.component";
import { AddSessionComponent } from "./espace-admin/add-session/add-session.component";
import { EnseignantsComponent } from "./espace-admin/enseignants/enseignants.component";
import { EtudiantsComponent } from "./espace-admin/etudiants/etudiants.component";
import { ModifySoutenanceComponent } from "./espace-admin/modify-soutenance/modify-soutenance.component";
import { PfeComponent } from "./espace-admin/pfe/pfe.component";
import { SoutenancesComponent } from "./espace-admin/soutenances/soutenances.component";
import { DetailPfeComponent } from "./espace-etudiant/detail-pfe/detail-pfe.component";
import { DetailSoutenanceComponent } from "./espace-etudiant/detail-soutenance/detail-soutenance.component";
import { EspaceEtudiantComponent } from "./espace-etudiant/espace-etudiant/espace-etudiant.component";
import { DetailEnseignantComponent } from "./shared/detail-enseignant/detail-enseignant.component";
import { ListeEnseignantComponent } from "./shared/liste-enseignant/liste-enseignant.component";
import { ListePfesComponent } from "./shared/liste-pfes/liste-pfes.component";
import { ModifySessionComponent } from './espace-admin/modify-session/modify-session.component';
import { SoutenanceFiliereComponent } from './espace-admin/soutenances/soutenance-filiere/soutenance-filiere.component';
//import { CreatePfeComponent } from './espace-etudiant/create-pfe/create-pfe.component';
import { CreatePfeComponent } from './espace-admin/create-pfe/create-pfe.component';


const APP_ROUTING: Routes = [
  {
    path: 'admin', children: [
      { path: 'etudiants', component: EtudiantsComponent },
      { path: 'enseignants', component: EnseignantsComponent },
      { path: 'admins', component: AdminsComponent },
      { path: 'pfe', component: PfeComponent },
      { path: 'createPfe', component: CreatePfeComponent },
      { path: 'soutenances', component: SoutenancesComponent },
      { path: 'addSession', component: AddSessionComponent },
      {path :'addUser',component:RegisterComponent},
      {path :'import',component:ImportComponent},
      { path: 'modifySoutenance', component: ModifySoutenanceComponent },
      { path: 'modifySession', component: ModifySessionComponent },
      { path: 'soutenances/filieres/:filiere', component: SoutenanceFiliereComponent }
    ],
    canActivate: [AuthGuard],
    // data: { roles: [Role.Admin] }
  },
  {
    path: 'calendrier', component: CalendrierComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'etudiant', component: EspaceEtudiantComponent,
    children: [
      {
        path: 'detailpfe',
        component: DetailPfeComponent,
      },
      {
        path: 'detailSoutenance/:id',
        component: DetailSoutenanceComponent,
      },
    ], canActivate: [AuthGuard]
  },
  {
    path: 'enseignants', component: ListeEnseignantComponent, canActivate: [AuthGuard]
  },
  {
    path: 'pfes', component: ListePfesComponent, canActivate: [AuthGuard]
  },
{path: 'enseignants', component: ListeEnseignantComponent},
{path: 'pfes', component: ListePfesComponent},
{path: 'enseignant/:cin', component: DetailEnseignantComponent},

{ path: 'login', component: LoginComponent },

{
  path: '',
  //component: AcceuilComponent,
  component: RegisterComponent,
  //canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '',
  },



];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
