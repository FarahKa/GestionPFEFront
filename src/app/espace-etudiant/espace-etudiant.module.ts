import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspaceEtudiantComponent } from './espace-etudiant/espace-etudiant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ROUTING } from '../app.routing';
import { DetailEtudiantComponent } from './detail-etudiant/detail-etudiant.component';
import { DetailPfeComponent } from './detail-pfe/detail-pfe.component';
import { DetailSoutenanceComponent } from './detail-soutenance/detail-soutenance.component';
import { HeaderComponent } from './header/header.component';

import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [ EspaceEtudiantComponent, DetailEtudiantComponent, DetailPfeComponent, DetailSoutenanceComponent,HeaderComponent, CreatePfeComponent],
 exports: [ EspaceEtudiantComponent ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ROUTING,
    DropDownListModule,
  ],
})
export class EspaceEtudiantModule { }
