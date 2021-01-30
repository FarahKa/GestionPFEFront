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
  constructor(private navigationService: NavigationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // UPDATE CURRENT_YEAR WHEN WE CREATE NEW YEAR (to do nhar e5er)
    localStorage.setItem("currentYear", "2020")
    // just a cute little thing ignore it
    let promo;
    promo = Number(localStorage.currentYear) + 1;
    promo = localStorage.currentYear + "/" + promo;

    this.sidebarIcon = faMinus
    this.hidden = true
    const filieres = [
      { "item": "Toutes les filières" },
      { "item": "GL" },
      { "item": "RT" },
      { "item": "IMI" },
      { "item": "IIA" },
      { "item": "CH" },
      { "item": "BIO" },
    ]
    //maybe i should nlem kol espace f tableau
    this.etudiants = [
      {
        "item": "Etudiants 5ème",
        "children": [
          {
            "item": "Toutes les filières",
            "option": "5ème"
          },
          {
            "item": "GL",
            "option": "5ème"
          },
          {
            "item": "RT",
            "option": "5ème"
          },
          {
            "item": "IMI",
            "option": "5ème"
          },
          {
            "item": "IIA",
            "option": "5ème"
          },
          {
            "item": "CH",
            "option": "5ème"
          },
          {
            "item": "BIO",
            "option": "5ème"
          },
        ]
      },
      {
        "item": "Etudiants Licence",
        "children": [
          {
            "item": "Toutes les filières",
            "option": "licence"
          },
          {
            "item": "GL",
            "option": "licence"
          },
          {
            "item": "RT",
            "option": "licence"
          },
          {
            "item": "IMI",
            "option": "licence"
          },
          {
            "item": "IIA",
            "option": "licence"
          },
          {
            "item": "CH",
            "option": "licence"
          },
          {
            "item": "BIO",
            "option": "licence"
          },
        ]
      },
      {
        "item": "Etudiants Master",
        "option": "master"
      },
      {
        "item": "Importer Etudiants"
      },
      {
        "item": "Expoter Etudiants"
      },
      {
        "item": "Etudiants Promo " + promo
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
          {
            "item": "Master",
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
          {
            "item": "Master",
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
        "children": filieres
      },
      {
        "item": "Calendrier"
      },
      {
        "item": "smth"
      }
    ]

    this.navigationService.subjectSelectedItem.pipe(distinctUntilChanged()).subscribe(
      (item: string) => { this.fillSidebarMenuItem(item); console.log("hi"); console.log(item); console.log("hi"); })
  }

  fillSidebarMenuItem(item: string) {

    this.hidden = false
    this._opened = true
    this.sidebarIcon = faMinus
    /**
     *
     *
     *  add e role stuff (sirine)
     *
     *
     *
     *
     */

    //const url = this.route.snapshot.url.split("&")[0]
    const role = localStorage.gestion_pfe_role
    if (item.includes("etudiants") && role == "admin")
      {this.sidebarMenuItems = this.etudiants}
    else if (item.includes("enseignants") && role == "admin")
      this.sidebarMenuItems = this.enseignants
    else if (item.includes("pfes") && role == "admin")
      this.sidebarMenuItems = this.pfes
    else if (item.includes("soutenances") && role == "admin")
      this.sidebarMenuItems = this.soutenances
    else {
      console.log("fl else")
      this.hidden = true
      this._opened = false
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
