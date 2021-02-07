import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SoutenancesService } from 'src/app/espace-admin/soutenances/soutenances.service';
import { Pfe } from 'src/app/models/pfe.model';

declare var require: any
const FileSaver = require("file-saver")

@Component({
  selector: 'app-view-pfe-details',
  templateUrl: './view-pfe-details.component.html',
  styleUrls: ['./view-pfe-details.component.css']
})
export class ViewPfeDetailsComponent implements OnInit {

  // subject for l edit issue
  @Input() pfe;

  @Input() allow_edit: boolean;

  @Input() editEnabled: boolean;
  @Output() editEnabledChange: EventEmitter<boolean>;

  constructor(
    private soutenancesService:SoutenancesService,
    private router: Router
    ) {
    this.editEnabledChange= new EventEmitter<boolean>()
  }

  ngOnInit(): void {
    this.allow_edit = true;
    this.editEnabledChange.emit(false)
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


  modifierPFE() {
    //this.editEnabled = true;
    //this.toggleEditEnabled.emit(true)
    this.editEnabledChange.emit(true)
  }

  cancel() {
    //this.editEnabled = false;
    //this.toggleEditEnabled.emit(false)
    this.editEnabledChange.emit(false)
  }

  save() {
    //this.editEnabled = false;
    this.editEnabledChange.emit(false)
    console.log(this.pfe)
    //SAVE L MODIF
    //this.pfeChange.emit(this.pfe)
    //this.toggleEditEnabled.emit(false)
  }

  closee() {
    console.log("close modal")
  }

  downloadPdf(pdfUrl: string, pdfName: string ) {
    //const pdfUrl = './assets/sample.pdf';
    //const pdfName = 'your_pdf_file';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  openDoc(pdfUrl: string ) {
    window.open(pdfUrl, '_blank', '', true);
  }

  removeMentor(cin){
    console.log(cin)
  }

  modifySoutenance(soutenance) : void {
    document.getElementById("close-modal-button").click();
    this.soutenancesService.setCurrentSoutenance(soutenance);
    this.router.navigate(['/admin/modifySoutenance'])

  }
}
