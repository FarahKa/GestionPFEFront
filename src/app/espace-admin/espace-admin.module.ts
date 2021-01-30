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
import { AppModule } from '../app.module';
import { RegisterEtudiantComponent } from './register-etudiant/register-etudiant.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ModalEditAdminComponent } from './modal-edit-admin/modal-edit-admin.component';
import { ModifySoutenanceComponent } from './modify-soutenance/modify-soutenance.component';
import { RegisterEnseignantComponent } from './register-enseignant/register-enseignant.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { AdminsComponent } from './admins/admins.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePickerModule } from "@syncfusion/ej2-angular-calendars";

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
    RegisterEtudiantComponent,
    ModalEditAdminComponent,
    ModifySoutenanceComponent,
    RegisterEnseignantComponent,
    RegisterAdminComponent,
    AdminsComponent

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
    NgbModule,
    DropDownListModule,
    MultiSelectModule,
    DateTimePickerModule
  ],
  providers: []
})
export class EspaceAdminModule { }
