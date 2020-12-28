import { RouterModule, Routes } from "@angular/router";
import { AcceuilComponent } from "./acceuil/acceuil.component";
import { CalendrierComponent } from "./calendrier/calendrier.component";
import { ListePFEComponent } from "./liste-pfe/liste-pfe.component";
import { SoutenancesComponent } from "./soutenances/soutenances.component";
import { ValidationPFEComponent } from "./validation-pfe/validation-pfe.component";

const APP_ROUTING : Routes = [
    { path: 'acceuil', component: AcceuilComponent },
    { path: 'validationPFE', component: ValidationPFEComponent },
    { path: 'listePFE', component: ListePFEComponent },
    { path: 'soutenances', component: SoutenancesComponent},
    { path: 'calendrier', component : CalendrierComponent },
    // { path: 'deconnexion'},
  
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);