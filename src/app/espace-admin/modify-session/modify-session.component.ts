import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { SoutenancesService } from '../soutenances/soutenances.service';

@Component({
  selector: 'app-modify-session',
  templateUrl: './modify-session.component.html',
  styleUrls: ['./modify-session.component.css']
})
export class ModifySessionComponent implements OnInit {


  session : any;
  president : any = {firstname : "", lastname : ""};
  enseignants : any;
  enseignantsSansPresident : any;


  sessions : any;


  sessionName : string;


  public fieldsE = { text: 'lastname', value: 'cin.cin' }
  public textE: string = "Changer President";


  constructor(private soutenancesService : SoutenancesService, private router : Router, private http : HttpService) { }

  
  ngOnInit(): void {
    this.session = this.soutenancesService.getCurrentSession();
    console.log(this.session)
    if(this.session === undefined){
      this.router.navigate(["/admin/soutenances"])
    } else {
      this.http.getPresident(this.session.id).subscribe((response) => {
        if(response !== null){
          this.president = response
        }
      })
      this.http.getEnseignants().subscribe((response : any) => {
        this.enseignants= response
        this.enseignantsSansPresident= this.enseignants.filter((enseignant) => enseignant.cin !== this.president.cin);
      })
      this.http.getSessions().subscribe((response) => {
        this.sessions = response
      })
    }
  }

  handleForm(formulaire : NgForm){
    let data=formulaire.form.value
    console.log(data)
    this.http.patchSession(this.session.id, data).subscribe(
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
