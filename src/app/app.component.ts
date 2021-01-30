import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';
import { NavigationService } from './components/navigation/navigation.service';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

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
  sidebarIcon;
  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    // UPDATE CURRENT_YEAR WHEN WE CREATE NEW YEAR (to do nhar e5er)
    localStorage.setItem("current_year", "2020")
    this.sidebarIcon = faMinus
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
          { "item": "CH" },
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

    const pfes_courants = "admin/pfe/courant/"
    const pfes_courants_non_valides = "admin/pfe/courants_non_valides/"
    this.pfes = [
      {
        "item": "PFEs courants",
        "children": [
          {
            "item": "Toutes les filières",
            "option": "courants"
          },
          {
            "item": "GL",
            "option": "courants"
          },
          {
            "item": "RT",
            "option": "courants"
          },
          {
            "item": "IMI",
            "option": "courants"
          },
          {
            "item": "IIA",
            "option": "courants"
          },
          {
            "item": "CH",
            "option": "courants"
          },
          {
            "item": "BIO",
            "option": "courants"
          },
        ]
      },
      {
        "item": "PFEs courants non-validés",
        "children": [
          {
            "item": "Toutes les filières",
            "option": "courants non valides"
          },
          {
            "item": "GL",
            "option": "courants non valides"
          },
          {
            "item": "RT",
            "option": "courants non valides"
          },
          {
            "item": "IMI",
            "option": "courants non valides"
          },
          {
            "item": "IIA",
            "option": "courants non valides"
          },
          {
            "item": "CH",
            "option": "courants non valides"
          },
          {
            "item": "BIO",
            "option": "courants non valides"
          },
        ]
      },
      {
        "item": "PFEs",
        "option": "all"
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
          { "item": "CH" },
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
      this._opened = true
      this.sidebarIcon = faMinus
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
  toggleSidebar() {
    if (this._opened) {
      this.sidebarIcon = faPlus
    } else {
      this.sidebarIcon = faMinus

    }
    this._opened = !this._opened;

  }
}