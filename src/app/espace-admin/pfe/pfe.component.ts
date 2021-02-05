import { Component, OnInit } from '@angular/core';
import { PrettySidebarService } from 'src/app/components/pretty-sidebar/pretty-sidebar.service';
import { SearchbarService } from 'src/app/components/searchbar/searchbar.service';
import { FiliereEnum } from 'src/app/enums/filere.enum';
import { PfeService } from './pfe.service';

@Component({
  selector: 'app-pfe',
  templateUrl: './pfe.component.html',
  styleUrls: ['./pfe.component.css']
})
export class PfeComponent implements OnInit {

  page: number = 1;

  pfes //initially only has current PFEs then if we want all then we get all
  pfes_to_display
  all_pfes
  option
  filiere

  search_fields
  searchFieldsSubject

  pfesSubject
  selectedItemSubject
  sidebar
  pfe

  editEnabled:boolean;
  constructor(private pfeService: PfeService, private sidebarService: PrettySidebarService, private searchbarService: SearchbarService) { }

  ngOnInit(): void {
    this.editEnabled = false;
    this.searchFieldsSubject = this.searchbarService.subjectSearchFields
    this.searchFieldsSubject.subscribe((data) => this.search(data))

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

    this.pfesSubject = this.pfeService.get_current_pfes()
    this.pfesSubject.subscribe(
      (reponse) => {
        this.pfes = reponse
        this.pfes_to_display = reponse
      })

    this.selectedItemSubject = this.sidebarService.subjectSelectedItem
    this.selectedItemSubject.subscribe(
      (item) => {
        this.filiere = item["item"]
        this.option = item["option"]
        this.changePFEsOnDisplay()
      })

    // this is just for testing without having to run the backend
    this.pfes = [
      {
        "cin": "12345678",
        "firstname": "Sirine",
        "lastname": "Achour ",
        "student_id_number": 222222,
        "filiere": "GL",
        "soutenance": {
          "id": 2,
          "date": "0000-00-00",
          "pfe": {
            "id": 2,
            "state": "",
            "subject": "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.",
            "private": false,
            "rapport": "./assets/sample.pdf",
            "hosting_enterprise": "IUFBFDSJU FIH",
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
            "subject": "a 2 encadrabts",
            "private": false,
            "rapport": "./assets/sample.pdf",
            "hosting_enterprise": "",
            "valid": true
          },
          "encadrants": [
            {
              "cin": "34",
              "firstname": "f 34",
              "lastname": "l 34"
            },
            {
              "cin": "99",
              "firstname": "firdts yay",
              "lastname": "last woohoo"
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
            "rapport": "./assets/sample.pdf",
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
            "rapport": "./assets/sample.pdf",
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
            "rapport": "./assets/sample.pdf",
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
            "rapport": "./assets/sample.pdf",
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
            "rapport": "./assets/sample.pdf",
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
            "rapport": "./assets/sample.pdf",
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
    this.pfe = {
      "cin": "",
      "firstname": "",
      "lastname": "",
      "student_id_number": 0,
      "filiere": "",
      "soutenance": {
        "id": 0,
        "date": "0000-00-00",
        "pfe": {
          "id": 0,
          "state": "",
          "subject": "",
          "private": false,
          "rapport": "./assets/sample.pdf",
          "hosting_enterprise": "",
          "valid": true
        },
        "encadrants": [
        ]
      }
    }

  }

 /* ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.pfesSubject.unsubscribe();
    this.searchFieldsSubject.unsubscribe();
    this.selectedItemSubject.unsubscribe();
}*/

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

      if (Object.values(FiliereEnum).includes(this.filiere)) {
        this.pfes_to_display = this.pfes_to_display.filter((p) => {
          return p.filiere == this.filiere
        })
      }
      if (this.filiere == "Master") {
        // somehow filter Master
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

  viewPFEDetails(pfe){
    console.log(pfe)
    this.pfe = pfe;
    this.editEnabled = false;
    // collapse the things when we view pfe
    document.getElementById("collapseZero").classList.remove("show");
    document.getElementById("collapseOne").classList.remove("show");
    document.getElementById("collapseTwo").classList.remove("show");
    document.getElementById("collapseThree").classList.remove("show");
    document.getElementById("collapseFour").classList.remove("show");
    const a_tags = document.getElementsByTagName("a");
    for (let index = 0; index < a_tags.length; index++) {
      a_tags[index].classList.add("collapsed")
      a_tags[index].setAttribute("aria-expanded", "false");
    }
  }
}
