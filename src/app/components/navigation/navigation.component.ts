import { User } from './../../models/user.model';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from './navigation.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}/*
export const ROUTES: RouteInfo[] = [
  { path: '/acceuil', title: 'Acceuil',  icon: 'dashboard', class: '' },
  { path: '/validationPFE', title: 'PFE non validés',  icon:'person', class: '' },
  { path: '/listePFE', title: 'Liste des PFE',  icon:'content_paste', class: '' },
  { path: '/soutenances', title: 'Soutenances',  icon:'library_books', class: '' },
  { path: '/calendrier', title: 'Calendrier',  icon:'bubble_chart', class: '' },
];*/
export const ROUTES: RouteInfo[] = [
  { path: '/admin/pfe', title: 'PFEs', icon: 'dashboard', class: '' },
  { path: '/admin/soutenances', title: 'Soutenances', icon: 'person', class: '' },
  { path: '/admin/etudiants', title: 'Etudiants', icon: 'content_paste', class: '' },
  { path: '/admin/enseignants', title: 'Enseignants', icon: 'library_books', class: '' },
  { path: '/calendrier', title: 'Calendrier', icon: 'bubble_chart', class: '' },
];

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  currentUser: User;
  menuItems: any[];
  constructor(private navigationbarService: NavigationService,private router: Router,
    private authenticationService: AuthentificationService) { 
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x); 
    }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    console.log("window.location.href : "+window.location.href)
    this.selectMenuItem(window.location.href)
  }

  selectMenuItem(path: string): void {
    if (path.includes("etudiant"))
      this.navigationbarService.selectNavBarMenuItem("etudiants")
    else if (path.includes("enseignant"))
      this.navigationbarService.selectNavBarMenuItem("enseignants")
    else if (path.includes("pfe"))
      this.navigationbarService.selectNavBarMenuItem("pfes")
    else if (path.includes("soutenance"))
      this.navigationbarService.selectNavBarMenuItem("soutenances")
    else
      this.navigationbarService.selectNavBarMenuItem("")
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
