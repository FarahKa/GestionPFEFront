import { Injectable } from '@angular/core';
import { Filiere, Session } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class SoutenancesService {

currentSoutenance : any;
getCurrentSoutenance() : any {
return this.currentSoutenance;
}
setCurrentSoutenance(soutenance : any) : void {
this.currentSoutenance = soutenance;
}

currentSession : any;
getCurrentSession() : any {
return this.currentSession;
}
setCurrentSession(session : any) : void {
this.currentSession = session;
}

  constructor(private http: HttpService) {}

   getFakeSessions(){
    let filieres : Filiere[] 
    let sessions : Session[]
        filieres = [
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
      sessions = [
        { id:1, nom: 'session1', filieres: filieres, start_date: new Date(), end_date : new Date(), dates: "" },
        { id:2, nom: 'session2', filieres: filieres, start_date: new Date(), end_date : new Date(), dates: ""  },
      ];
      return sessions

   }

   getSessions() {
    let sessions : Session[]
    let rawSoutenances;
    console.log('aaaaaaaaaaa');
    // this.http.getSessions().subscribe(
    //   (reponse) => {
    //     console.log(reponse)
    //     let sessions : any;
    //     sessions = reponse as Array<Object>;
    //     let sessionsng : Session[] = [];

    //     sessions.forEach(session => {
    //       let filieres : Filiere[] = [];
    //       if(session.soutenances){
    //         session.soutenances.forEach(soutenance => {
    //          let filiere = filieres.find(filiere => filiere.nom === soutenance.etudiant.filiere)
    //         if (filiere) {
    //           filiere.soutenances.push(soutenance)
    //         } else {
    //           filiere = {nom : soutenance.etudiant.filiere, soutenances : [soutenance]}
    //           filieres.push(filiere);
    //         }
    //         let sessionng : Session = {id : session.id, nom : session.name, start_date : session.start_date, end_date : session.end_date, filieres: filieres}
    //         sessionsng.push(sessionng);
    //       });
    //       }
    //     });
    //     console.log(sessionsng);
    //     return sessionsng

    //   },
    //   (error) => {
    //     console.log(error);
    //     return this.getFakeSessions();
    //   }
    // );
   }
}
