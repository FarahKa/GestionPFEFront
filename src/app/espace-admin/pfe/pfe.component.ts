import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';
import { PrettySidebarService } from 'src/app/components/pretty-sidebar/pretty-sidebar.service';
import { SearchbarComponent } from 'src/app/components/searchbar/searchbar.component';
import { SearchbarService } from 'src/app/components/searchbar/searchbar.service';
import { PfeService } from './pfe.service';

@Component({
  selector: 'app-pfe',
  templateUrl: './pfe.component.html',
  styleUrls: ['./pfe.component.css']
})
export class PfeComponent implements OnInit {

  pfes //initially only has current PFEs then if we want all then we get all
  pfes_to_display
  all_pfes
  option
  filiere
  search_fields
  constructor(private pfeService: PfeService, private sidebarService: PrettySidebarService, private searchbarService: SearchbarService) { }

  ngOnInit(): void {
    this.searchbarService.subjectSearchFields.subscribe((data) => this.search(data))

    this.search_fields = [
      {
        label: "Sujet",
        input: "",
      },
      {
        label: "Enterprise",
        input: "",
      },
      {
        label: "CIN Encadrant",
        input: "",
      },
      {
        label: "ID Etudiant",
        input: "",
      }
    ]

    this.pfeService.get_current_pfes().subscribe(
      (reponse) => {
        this.pfes = reponse
        this.pfes_to_display = reponse
      })

    this.sidebarService.subjectSelectedItem.subscribe(
      (item) => {
        this.filiere = item["item"]
        this.option = item["option"]
        this.changePFEsOnDisplay()
      })

    // this is just for testing without having to run the backend
    this.pfes = [
      {
        "cin": "66",
        "firstname": "f 66",
        "lastname": "l 66",
        "student_id_number": 66,
        "filiere": "RT",
        "soutenance": {
          "id": 2,
          "date": "0000-00-00",
          "pfe": {
            "id": 2,
            "state": "",
            "subject": "b",
            "private": false,
            "rapport": "",
            "hosting_enterprise": "a",
            "valid": true
          },
          "encadrants": [
            {
              "cin": "34",
              "firstname": "f 34",
              "lastname": "l 34"
            }
          ]
        }
      },
      {
        "cin": "88",
        "firstname": "f 88",
        "lastname": "l 88",
        "student_id_number": 88,
        "filiere": "GL",
        "soutenance": {
          "id": 1,
          "date": "0000-00-00",
          "pfe": {
            "id": 1,
            "state": "",
            "subject": "a",
            "private": false,
            "rapport": "",
            "hosting_enterprise": "",
            "valid": true
          },
          "encadrants": [
            {
              "cin": "34",
              "firstname": "f 34",
              "lastname": "l 34"
            }
          ]
        }
      },
      {
        "cin": "66",
        "firstname": "f 66",
        "lastname": "l 66",
        "student_id_number": 66,
        "filiere": "IMI",
        "soutenance": {
          "id": 2,
          "date": "0000-00-00",
          "pfe": {
            "id": 2,
            "state": "",
            "subject": "b",
            "private": false,
            "rapport": "",
            "hosting_enterprise": "a",
            "valid": true
          },
          "encadrants": [
            {
              "cin": "34",
              "firstname": "f 34",
              "lastname": "l 34"
            }
          ]
        }
      },
      {
        "cin": "88",
        "firstname": "f 88",
        "lastname": "l 88",
        "student_id_number": 88,
        "filiere": "GL",
        "soutenance": {
          "id": 1,
          "date": "0000-00-00",
          "pfe": {
            "id": 1,
            "state": "",
            "subject": "a",
            "private": false,
            "rapport": "",
            "hosting_enterprise": "",
            "valid": false
          },
          "encadrants": [
            {
              "cin": "12",
              "firstname": "f 12",
              "lastname": "l 12"
            },
            {
              "cin": "34",
              "firstname": "f 34",
              "lastname": "l 34"
            }
          ]
        }
      },
      {
        "cin": "66",
        "firstname": "f 66",
        "lastname": "l 66",
        "student_id_number": 66,
        "filiere": "RT",
        "soutenance": {
          "id": 2,
          "date": "0000-00-00",
          "pfe": {
            "id": 2,
            "state": "",
            "subject": "b",
            "private": false,
            "rapport": "",
            "hosting_enterprise": "a",
            "valid": false
          },
          "encadrants": [
            {
              "cin": "34",
              "firstname": "f 34",
              "lastname": "l 34"
            }
          ]
        }
      },
      {
        "cin": "88",
        "firstname": "f 88",
        "lastname": "l 88",
        "student_id_number": 88,
        "filiere": "GL",
        "soutenance": {
          "id": 1,
          "date": "0000-00-00",
          "pfe": {
            "id": 1,
            "state": "",
            "subject": "a",
            "private": false,
            "rapport": "",
            "hosting_enterprise": "",
            "valid": false
          },
          "encadrants": [
            {
              "cin": "12",
              "firstname": "f 12",
              "lastname": "l 12"
            },
            {
              "cin": "34",
              "firstname": "f 34",
              "lastname": "l 34"
            }
          ]
        }
      },
      {
        "cin": "66",
        "firstname": "f 66",
        "lastname": "l 66",
        "student_id_number": 66,
        "filiere": "RT",
        "soutenance": {
          "id": 2,
          "date": "0000-00-00",
          "pfe": {
            "id": 2,
            "state": "",
            "subject": "b",
            "private": false,
            "rapport": "",
            "hosting_enterprise": "a",
            "valid": false
          },
          "encadrants": [
            {
              "cin": "34",
              "firstname": "f 34",
              "lastname": "l 34"
            }
          ]
        }
      },
      {
        "cin": "88",
        "firstname": "f 88",
        "lastname": "l 88",
        "student_id_number": 88,
        "filiere": "GL",
        "soutenance": {
          "id": 1,
          "date": "0000-00-00",
          "pfe": {
            "id": 1,
            "state": "",
            "subject": "a",
            "private": false,
            "rapport": "",
            "hosting_enterprise": "",
            "valid": false
          },
          "encadrants": [
            {
              "cin": "12",
              "firstname": "f 12",
              "lastname": "l 12"
            },
            {
              "cin": "34",
              "firstname": "f 34",
              "lastname": "l 34"
            }
          ]
        }
      }
    ]
    this.pfes_to_display = this.pfes

  }

  changePFEsOnDisplay() {
    if (this.option == "all") {
      //here get everything again this time for all years
      if (this.search_fields[this.search_fields.length - 1].label != "Year")
        this.search_fields.push({
          label: "Year",
          input: "2020",
          type: "number"
        })
      this.pfeService.get_all_pfes().subscribe(
        (reponse) => {
          this.pfes_to_display = reponse
        })
      this.pfes_to_display = this.pfes //just for testing
    } else {
      if (this.search_fields[this.search_fields.length - 1].label == "Year")
        this.search_fields.pop()
      this.pfes_to_display = this.pfes
      if (this.option == "courants non valides") {
        this.pfes_to_display = this.pfes_to_display.filter((p) => {
          return p.soutenance.pfe.valid == false
        })
      }

      if (["GL", "RT", "IIA", "IMI", "BIO", "CH"].indexOf(this.filiere) > -1) {
        this.pfes_to_display = this.pfes_to_display.filter((p) => {
          return p.filiere == this.filiere
        })
      }
    }
  }

  search(filters) {
    filters = filters.filter((f) => {
      return f.input != ""
    });
    this.pfes_to_display = this.pfes_to_display.filter((p) => {
      for (let index = 0; index < filters.length; index++) {
        const filter = filters[index];
        if ((filter.label == "Sujet") && (!p.soutenance.pfe.subject.includes(filter.input))) {
          return false
        }
        if ((filter.label == "Entreprise") && (!p.soutenance.pfe.hosting_enterprise.includes(filter.input))) {
          return false
        }
        if (filter.label == "CIN Encadrant") {
          let check = false
          for (let i = 0; i < p.soutenance.encadrants.length; i++) {
            if (p.soutenance.encadrants[i].cin.includes(filter.input))
              check = true
          }
          if (!check)
            return false
        }
        if ((filter.label == "ID Etudiant") && (!p.student_id_number.toString().includes(filter.input))) {
          return false
        }
        if ((filter.label == "Year") && (p.year.year != filter.input)) {
          return false
        }

      }
      return true
    })
  }
}
