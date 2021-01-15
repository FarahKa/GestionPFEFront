import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { PfeComponent } from './pfe/pfe.component';
import { SoutenancesComponent } from './soutenances/soutenances.component';
import { AccordionComponent } from '../components/accordion/accordion.component';
import { ItemComponent } from '../components/accordion/item/item.component';
import { SearchbarComponent } from '../components/searchbar/searchbar.component';
import { faIcons } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ROUTING } from '../app.routing';
import { AddSessionComponent } from './add-session/add-session.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EtudiantsComponent,
    EnseignantsComponent,
    PfeComponent,
    SoutenancesComponent,
    AccordionComponent,
    ItemComponent,
    SearchbarComponent,
    AddSessionComponent
  ],
  exports: [AccordionComponent, ItemComponent, SearchbarComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ROUTING,
    FormsModule
  ],
  providers: []
})
export class EspaceAdminModule { }
