import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EspaceEtudiantModule } from './espace-etudiant/espace-etudiant.module';
import { ListeEnseignantComponent } from './shared/liste-enseignant/liste-enseignant.component';
import { ListePfesComponent } from './shared/liste-pfes/liste-pfes.component';
import { DetailEnseignantComponent } from './shared/detail-enseignant/detail-enseignant.component';
import { AlertComponent } from './shared/alert/alert.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewPfeDetailsComponent } from './components/view-pfe-details/view-pfe-details.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
//import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

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
    AlertComponent,
    LoginComponent,
    //ViewPfeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    ROUTING,
    FontAwesomeModule,
    EspaceAdminModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    EspaceEtudiantModule,
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxDropzoneModule 

  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
   //fakeBackendProvider

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
