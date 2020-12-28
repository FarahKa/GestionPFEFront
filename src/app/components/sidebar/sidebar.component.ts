import { Component, OnInit } from '@angular/core';


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/acceuil', title: 'Acceuil',  icon: 'dashboard', class: '' },
  { path: '/validationPFE', title: 'PFE non validés',  icon:'person', class: '' },
  { path: '/listePFE', title: 'Liste des PFE',  icon:'content_paste', class: '' },
  { path: '/soutenances', title: 'Soutenances',  icon:'library_books', class: '' },
  { path: '/calendrier', title: 'Calendrier',  icon:'bubble_chart', class: '' },
  { path: '/deconnexion', title: 'Déconnexion',  icon:'location_on', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems : any[];
  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
