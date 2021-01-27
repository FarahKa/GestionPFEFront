import { AppRoutingModule } from './../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { EspaceAdminComponent } from './espace-admin/espace-admin.component';
import { AppModule } from '../app.module';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { ModifySoutenanceComponent } from './modify-soutenance/modify-soutenance.component';



@NgModule({
  declarations: [
    EtudiantsComponent,
    EnseignantsComponent,
    PfeComponent,
    SoutenancesComponent,
    AccordionComponent,
    ItemComponent,
    SearchbarComponent,
    AddSessionComponent,
    EspaceAdminComponent,
    RegisterComponent,
    ModalEditComponent,
    ModifySoutenanceComponent

  ],
  exports: [AccordionComponent, ItemComponent, SearchbarComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ROUTING,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: []
})
export class EspaceAdminModule { }
