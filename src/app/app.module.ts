import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { ROUTING } from './app.routing';
import { SidebarModule } from 'ng-sidebar';
import { PrettySidebarComponent } from './components/pretty-sidebar/pretty-sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ItemComponent } from './components/accordion/item/item.component';
import { CommonModule } from '@angular/common';
import { EspaceAdminModule } from './espace-admin/espace-admin.module';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EspaceEtudiantModule } from './espace-etudiant/espace-etudiant.module';
import { ListeEnseignantComponent } from './shared/liste-enseignant/liste-enseignant.component';
import { ListePfesComponent } from './shared/liste-pfes/liste-pfes.component';
import { DetailEnseignantComponent } from './shared/detail-enseignant/detail-enseignant.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AcceuilComponent,
    CalendrierComponent,
    PrettySidebarComponent,
    ListeEnseignantComponent,
    ListePfesComponent,
    DetailEnseignantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    ROUTING,
    FontAwesomeModule,
    EspaceAdminModule,
    HttpClientModule,
    FormsModule,
    EspaceEtudiantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
