import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filiere, Session } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { SoutenancesService } from './soutenances.service';





@Component({
  selector: 'app-soutenances',
  templateUrl: './soutenances.component.html',
  styleUrls: ['./soutenances.component.css'],
})
export class SoutenancesComponent implements OnInit {
  sessions: Session[];
  filieres: Filiere[];
  rogues : Session = {
    id: 999,
    nom: "Soutenances non attribuées à une session particulière.",
    start_date : null,
    end_date : null,
    filieres : [],
    dates : ""
  };
  constructor(private soutenancesService: SoutenancesService, private http : HttpService, private router : Router) {}

  ngOnInit(): void {
    this.http.getRogues().subscribe((response : any)=> {
      response.forEach(soutenance => {
        let filiere = this.rogues.filieres.find(filiere => filiere.nom === soutenance.etudiant.filiere)
       if (filiere) {
         filiere.soutenances.push(soutenance)
       } else {
         filiere = {nom : soutenance.etudiant.filiere, soutenances : [soutenance]}
         this.rogues.filieres.push(filiere);
       }
     });
     console.log(this.rogues)

    },
    (error)=>{
      console.log(error)
    })

    this.http.getSessions().subscribe(
      (reponse) => {
        console.log(reponse)
        let sessions : any;
        sessions = reponse as Array<Object>;
        let sessionsng : Session[] = [];

        sessions.forEach(session => {
          let filieres : Filiere[] = [];
            session.soutenances.forEach(async soutenance => {
              // let test = this.http.getEncadrant(soutenance.id).subscribe((response)=>{
              //   return response
              // })
              // let encadrant = await test()
              // soutenance.encadrant = encadrant;
             let filiere = filieres.find(filiere => filiere.nom === soutenance.etudiant.filiere)
            if (filiere) {
              filiere.soutenances.push(soutenance)
            } else {
              filiere = {nom : soutenance.etudiant.filiere, soutenances : [soutenance]}
              filieres.push(filiere);
            }
          });
          let sessionng : Session = {id : session.id, nom : session.name, start_date : session.start_date, end_date : session.end_date, filieres: filieres, dates: "- de " + session.start_date + " à " +session.end_date}
          sessionsng.push(sessionng);
        });
        console.log(sessionsng);
        this.sessions = sessionsng
        this.sessions.unshift(this.rogues)

      },
      (error) => {
        console.log(error);
        this.sessions = this.soutenancesService.getFakeSessions();
      }
    );
  }
  modifySoutenance(soutenance) : void {
    this.soutenancesService.setCurrentSoutenance(soutenance);
    this.router.navigate(['/admin/modifySoutenance'])

  }
}
