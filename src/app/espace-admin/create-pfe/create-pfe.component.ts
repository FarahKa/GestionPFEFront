import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { PfeService } from '../pfe/pfe.service';
import { SoutenancesService } from '../soutenances/soutenances.service';

@Component({
  selector: 'app-create-pfe',
  templateUrl: './create-pfe.component.html',
  styleUrls: ['./create-pfe.component.css'],
})
export class CreatePfeComponent implements OnInit {
  enseignants : any;
  etudiants : any;

  fieldsEtudiants = { text: 'lastname', value: 'cin.cin' };
  textEtudiants = "Choisir l'étudiant";
  fieldsE = { text: 'lastname', value: 'cin.cin' };
  textE = "Choisir l'encadrant";

  constructor(
    private pfeService: PfeService,
    private soutenancesService: SoutenancesService,
    private router: Router,
    private http: HttpService
  ) {}

  ngOnInit(): void {
    //need get etudiants that dont have pfe yet!!!
    this.pfeService.get_students_noPFE().subscribe((response : any) => {
      console.log(response)
      this.etudiants = response
    })
    //enseignants for encadrant field:
    this.http.getEnseignants().subscribe((response : any) => {
      console.log(response)
      this.enseignants= response
    })
  }
  handleForm(formulaire : NgForm){
    console.log(formulaire.form.value)
  }
  handleAnnuler() {
    this.router.navigate(["/admin/pfe"])
  }
}
