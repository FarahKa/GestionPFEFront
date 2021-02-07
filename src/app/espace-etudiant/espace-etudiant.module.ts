import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspaceEtudiantComponent } from './espace-etudiant/espace-etudiant.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ROUTING } from '../app.routing';
import { DetailEtudiantComponent } from './detail-etudiant/detail-etudiant.component';
import { DetailPfeComponent } from './detail-pfe/detail-pfe.component';
import { DetailSoutenanceComponent } from './detail-soutenance/detail-soutenance.component';
import { EditPfeComponent } from './edit-pfe/edit-pfe.component';
import { HeaderComponent } from './header/header.component';
import { CreatePfeComponent } from './create-pfe/create-pfe.component';

@NgModule({
  declarations: [ EspaceEtudiantComponent, DetailEtudiantComponent, DetailPfeComponent, DetailSoutenanceComponent, EditPfeComponent, HeaderComponent, CreatePfeComponent],
  exports: [ EspaceEtudiantComponent ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ROUTING,
  ],
})
export class EspaceEtudiantModule { }
