import { Component, OnInit } from '@angular/core';
import { Filiere, Session } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';





@Component({
  selector: 'app-soutenances',
  templateUrl: './soutenances.component.html',
  styleUrls: ['./soutenances.component.css'],
})
export class SoutenancesComponent implements OnInit {
  sessions: Session[];
  filieres: Filiere[];
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.filieres = [
      {
        nom: 'gl',
        soutenances: [
          { nom: 'une soutenance', etudiant: 'machintruc' },
          { nom: 'une soutenance', etudiant: 'machintruc' },
        ],
      },
      {
        nom: 'rt',
        soutenances: [
          { nom: 'une soutenance', etudiant: 'machintruc' },
          { nom: 'une soutenance', etudiant: 'machintruc' },
        ],
      },
      {
        nom: 'cd',
        soutenances: [
          { nom: 'une soutenance', etudiant: 'machintruc' },
          { nom: 'une soutenance', etudiant: 'machintruc' },
        ],
      },
    ];
    this.sessions = [
      { id:1, nom: 'session1', filieres: this.filieres, start_date: new Date(), end_date : new Date() },
      { id:2, nom: 'session2', filieres: this.filieres, start_date: new Date(), end_date : new Date()  },
    ];

    let rawSoutenances;
    console.log('aaaaaaaaaaa');
    this.http.getSoutenances().subscribe(
      (reponse) => {
        rawSoutenances = reponse;
        console.log(rawSoutenances);
        let session = {
          nom : "",
          filieres: []
        }
      
        //let sessions : Session[];
        let sessions : Session[];
        rawSoutenances.forEach(soutenance => {
          var index = sessions.findIndex(x => x.id==soutenance.session.id); 
          index === -1 ? sessions.push(soutenance.session) : console.log("object already exists")
          index = sessions.findIndex(x => x.id==soutenance.session.id); 
          if(soutenance.etudiant.filiere === "GL"){
            //sessions[index].filieres.gl.soutenances.add(soutenance)
          } else if(soutenance.etudiant.filiere === "RT"){
            //sessions[index].filieres.rt.soutenances.add(soutenance)
          }

        });
        console.log(sessions)

      },
      (error) => {
        console.log(error);
      }
    );
  }
}
