import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Pfe } from 'src/app/models/pfe.model';

@Component({
  selector: 'app-view-pfe-details',
  templateUrl: './view-pfe-details.component.html',
  styleUrls: ['./view-pfe-details.component.css']
})
export class ViewPfeDetailsComponent implements OnInit {

  @Input() pfe;
  //@Output() pfeChange = new EventEmitter();

  @Input() allow_edit:boolean;
  edit:boolean;
  constructor() { }

  ngOnInit(): void {
    this.allow_edit = true;
    this.edit = false;
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
          "rapport": "",
          "hosting_enterprise": "",
          "valid": true
        },
        "encadrants": [
        ]
      }
    }
  }

  modifierPFE(){
    this.edit=true;
  }

  cancel(){
    this.edit=false;
  }

  save(){
    this.edit=false;
  }

  closee(){
    console.log("close modal")
  }

}
