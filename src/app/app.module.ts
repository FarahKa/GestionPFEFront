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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AcceuilComponent,
    ValidationPFEComponent,
    ListePFEComponent,
    SoutenancesComponent,
    CalendrierComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
