import { Component, OnInit } from '@angular/core';
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
  constructor(private soutenancesService: SoutenancesService, private http : HttpService) {}

  ngOnInit(): void {
    this.http.getSessions().subscribe(
      (reponse) => {
        console.log(reponse)
        let sessions : any;
        sessions = reponse as Array<Object>;
        let sessionsng : Session[] = [];

        sessions.forEach(session => {
          let filieres : Filiere[] = [];
          if(session.soutenances){
            session.soutenances.forEach(soutenance => {
             let filiere = filieres.find(filiere => filiere.nom === soutenance.etudiant.filiere)
            if (filiere) {
              filiere.soutenances.push(soutenance)
            } else {
              filiere = {nom : soutenance.etudiant.filiere, soutenances : [soutenance]}
              filieres.push(filiere);
            }
            let sessionng : Session = {id : session.id, nom : session.name, start_date : session.start_date, end_date : session.end_date, filieres: filieres}
            sessionsng.push(sessionng);
          });
          }
        });
        console.log(sessionsng);
        this.sessions = sessionsng

      },
      (error) => {
        console.log(error);
        this.sessions = this.soutenancesService.getFakeSessions();
      }
    );
  }
}
