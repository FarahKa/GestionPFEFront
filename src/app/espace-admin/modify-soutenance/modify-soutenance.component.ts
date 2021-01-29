import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { SoutenancesService } from '../soutenances/soutenances.service';

@Component({
  selector: 'app-modify-soutenance',
  templateUrl: './modify-soutenance.component.html',
  styleUrls: ['./modify-soutenance.component.css']
})
export class ModifySoutenanceComponent implements OnInit {

  soutenance : any;
  sessions : any;
  enseignants : any;
  enseignantsSansEncadrant : any;
  encadrant : any = {firstname : "", lastname : ""};
  sessionName : string;


  public fieldsE = { text: 'lastname', value: 'cin' }
  public textE: string = "Changer Encadrant";

  public fieldsJ = { text: 'lastname', value: 'cin' }
  public placeholderJ: string = "Changer Jury";

  public fieldsS = { text: 'name', value: 'id' }
  public textS: string = "Changer la Session";

  constructor(private soutenancesService: SoutenancesService, private router : Router, private http : HttpService) { }

  
  ngOnInit(): void {
    this.soutenance = this.soutenancesService.getCurrentSoutenance();
    console.log(this.soutenance)
    if(this.soutenance === undefined){
      this.router.navigate(["/admin/soutenances"])
    } else {
      this.http.getEncadrant(this.soutenance.id).subscribe((response) => {
        this.encadrant = response
      })
      this.http.getEnseignants().subscribe((response : any) => {
        this.enseignants= response
        this.enseignantsSansEncadrant= this.enseignants.filter((enseignant) => enseignant.cin !== this.encadrant.cin);
      })
      this.http.getSessions().subscribe((response) => {
        this.sessions = response
      })
    }
  }

  handleForm(formulaire : NgForm){
    console.log(formulaire.form.value)
    this.http.patchSoutenance(this.soutenance.id, formulaire.form.value).subscribe(
      (response) => {
        console.log("got a good response")
        console.log(response)
        this.router.navigate(["/admin/soutenances"])
      },
      error => console.log(error)
    )
  }
  handleAnnuler(){
    this.router.navigate(["/admin/soutenances"])
  }
}

