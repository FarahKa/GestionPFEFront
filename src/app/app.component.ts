import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';
import { NavigationService } from './components/navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestion-pfe-front';
  _opened: boolean = false;

  private etudiants;
  private enseignants;
  private pfes;
  private soutenances;

  hidden: boolean;
  sidebarMenuItems;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {

      this.hidden = true

    //maybe i should nlem kol espace f tableau
    this.etudiants = [
      {
        "item": "Etudiants 5ème",
        "children": [
          { "item": "GL" },
          { "item": "RT" },
          { "item": "IMI" },
          { "item": "IIA" },
          { "item": "GL" },
          { "item": "BIO" },
        ]
      },
      {
        "item": "Importer Etudiants"
      },
      {
        "item": "Expoter Etudiants"
      }
    ]

    this.enseignants = [
      {
        "item": "Enseigants",
        "children": [
          { "item": "Dép Math/Info" },
          { "item": "Dép Bio/Chimie" },
          { "item": "Dép Physique" },
        ]
      },
      {
        "item": "Importer Enseignants"
      },
      {
        "item": "Expoter Enseignants"
      }
    ]

    this.pfes = [
      {
        "item": "PFEs",
        "children": [
          { "item": "GL" },
          { "item": "RT" },
          { "item": "IMI" },
          { "item": "IIA" },
          { "item": "GL" },
          { "item": "BIO" },
        ]
      },
      {
        "item": "PFEs non-validés"
      },
      {
        "item": "idk smth"
      }
    ]

    this.soutenances = [
      {
        "item": "Soutenances",
        "children": [
          { "item": "GL" },
          { "item": "RT" },
          { "item": "IMI" },
          { "item": "IIA" },
          { "item": "GL" },
          { "item": "BIO" },
        ]
      },
      {
        "item": "Calendrier"
      },
      {
        "item": "smth"
      }
    ]

    this.navigationService.subjectSelectedItem.pipe(distinctUntilChanged()).subscribe(
      (item: string) => this.fillSidebarMenuItem(item))
  }

  fillSidebarMenuItem(item: string) {
    {
      this.hidden = false
      if (item.includes("etudiants"))
        this.sidebarMenuItems = this.etudiants
      else if (item.includes("enseignants"))
        this.sidebarMenuItems = this.enseignants
      else if (item.includes("pfes"))
        this.sidebarMenuItems = this.pfes
      else if (item.includes("soutenances"))
        this.sidebarMenuItems = this.soutenances
      else {
        this.hidden = true
        if (this._opened) {
          this._opened = false
        }
      }
    }
  }
  _toggleSidebar() {
    this._opened = !this._opened;
  }
}
