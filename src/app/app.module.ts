import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ValidationPFEComponent } from './validation-pfe/validation-pfe.component';
import { ListePFEComponent } from './liste-pfe/liste-pfe.component';
import { SoutenancesComponent } from './soutenances/soutenances.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { ROUTING } from './app.routing';
import { HttpComponent } from './http/http.component';
import { SidebarModule } from 'ng-sidebar';
import { PrettySidebarComponent } from './components/pretty-sidebar/pretty-sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ItemComponent } from './components/accordion/item/item.component';
import { CommonModule } from '@angular/common';
import { EspaceAdminModule } from './espace-admin/espace-admin.module';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AcceuilComponent,
    ValidationPFEComponent,
    ListePFEComponent,
    SoutenancesComponent,
    CalendrierComponent,
    HttpComponent,
    PrettySidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    ROUTING,
    FontAwesomeModule,
    EspaceAdminModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
