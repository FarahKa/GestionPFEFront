import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { PfeComponent } from './pfe/pfe.component';
import { SoutenancesComponent } from './soutenances/soutenances.component';



@NgModule({
  declarations: [
    EtudiantsComponent,
    EnseignantsComponent,
    PfeComponent,
    SoutenancesComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: []
})
export class EspaceAdminModule { }
