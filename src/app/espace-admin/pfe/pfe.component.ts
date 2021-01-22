import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';
import { PrettySidebarService } from 'src/app/components/pretty-sidebar/pretty-sidebar.service';
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
  constructor(private pfeService: PfeService, private sidebarService: PrettySidebarService) { }

  ngOnInit(): void {
    this.sidebarService.subjectSelectedItem.pipe(distinctUntilChanged()).subscribe(
      (item) => {
        this.filiere = item["item"]
        this.option = item["option"]
        this.changePFEsOnDisplay()
      })

    this.pfeService.get_current_pfes().subscribe(
      (reponse) => {
        this.pfes = reponse
        this.pfes_to_display = reponse
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
    console.log("in change display")
    if (this.option == "all") {
      //here get everything again this time for all years
      this.pfeService.get_all_pfes().subscribe(
        (reponse) => {
          this.pfes_to_display = reponse
        })
    } else {
      this.pfes_to_display = this.pfes
      if(this.option == "courants non valides"){
        this.pfes_to_display = this.pfes_to_display.filter((p) => {
          return p.soutenance.pfe.valid == false
        })
      }
      console.log(this.filiere)
      if (["GL", "RT","IIA", "IMI", "BIO", "CH"].indexOf(this.filiere) > -1) {

        this.pfes_to_display = this.pfes_to_display.filter((p) => {
          return p.filiere == this.filiere
        })
      }
    }
  }

}
