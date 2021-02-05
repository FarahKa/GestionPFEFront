import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrettySidebarService } from 'src/app/components/pretty-sidebar/pretty-sidebar.service';
import { Filiere, Session } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { SoutenancesService } from './soutenances.service';

@Component({
  selector: 'app-soutenances',
  templateUrl: './soutenances.component.html',
  styleUrls: ['./soutenances.component.css'],
})
export class SoutenancesComponent implements OnInit {
  selectedItemSubject;
  subscription;
  switch: boolean = false;
  soutenancesByFilieres: any;
  soutenancesFiliere: any;
  filiereInput: string;

  filiereArray = ['GL', 'RT', 'IMI', 'IIA', 'CH', 'BIO'];

  sessions: Session[];
  filieres: Filiere[];
  rogues: Session = {
    id: 999,
    nom: 'Soutenances non attribuées à une session particulière.',
    start_date: null,
    end_date: null,
    filieres: [],
    dates: '',
  };
  constructor(
    private soutenancesService: SoutenancesService,
    private http: HttpService,
    private router: Router,
    private sidebarService: PrettySidebarService
  ) {}

  ngOnInit(): void {
    this.switch = false;
    this.http.getRogues().subscribe(
      (response: any) => {
        response.forEach((soutenance) => {
          let filiere = this.rogues.filieres.find(
            (filiere) => filiere.nom === soutenance.etudiant.filiere
          );
          if (filiere) {
            filiere.soutenances.push(soutenance);
          } else {
            filiere = {
              nom: soutenance.etudiant.filiere,
              soutenances: [soutenance],
            };
            this.rogues.filieres.push(filiere);
          }
        });
      },
      (error) => {
        console.log(error);
      }
    );

    this.http.getSessions().subscribe(
      (reponse) => {
        console.log("Sessions : ")
        console.log(reponse)

        let sessions: any;
        sessions = reponse as Array<Object>;
        let sessionsng: Session[] = [];

        sessions.forEach((session) => {
          let filieres: Filiere[] = [];
          session.soutenances.forEach((soutenance) => {
            this.http.getEncadrant(soutenance.id).subscribe(
              (response) => {
                soutenance.encadrant = response;
              },
              (error) => console.log(error)
            );

            this.http.getJury(soutenance.id).subscribe(
              (response) => {
                soutenance.jury = response;
              },
              (error) => console.log(error)
            );

            let filiere = filieres.find(
              (filiere) => filiere.nom === soutenance.etudiant.filiere
            );
            if (filiere) {
              filiere.soutenances.push(soutenance);
            } else {
              filiere = {
                nom: soutenance.etudiant.filiere,
                soutenances: [soutenance],
              };
              filieres.push(filiere);
            }
          });
          let sessionng: Session = {
            id: session.id,
            nom: session.name,
            start_date: session.start_date,
            end_date: session.end_date,
            filieres: filieres,
            dates: '- de ' + session.start_date + ' à ' + session.end_date,
          };
          sessionsng.push(sessionng);
        });
        this.sessions = sessionsng;
        // .sort((a, b) => {
        //   var dateA = new Date(a.start_date);
        //   var dateB = new Date(b.start_date);
        //   return dateA < dateB;
        // });
        this.sessions.unshift(this.rogues);
      },
      (error) => {
        console.log(error);
        this.sessions = this.soutenancesService.getFakeSessions();
      }
    );

    //TODO: delete this when in prod and roles work correctly

    localStorage.setItem('gestion_pfe_role', 'admin');
    this.selectedItemSubject = this.sidebarService.subjectSelectedItem;
    this.subscription = this.selectedItemSubject.subscribe((item) => {
      if (
        this.filiereArray.includes(item.item)
      ) {
        console.log("does include")
        this.filiereInput = item.item;
        let input = item.item;
        this.http.getSoutenancesByFiliere().subscribe(
          (response) => {
            this.soutenancesByFilieres = response;

            let filiereFull = this.soutenancesByFilieres.find(
              (filiere) => filiere.nom === input
            );
            if (filiereFull) {
              this.soutenancesFiliere = filiereFull.soutenances;
            } else {
              this.soutenancesFiliere = [];
            }
            this.switch = true;
          },
          (error) => {
            console.log(error);
          }
        );
      } else if (item.item === "Toutes les filières"){
        this.switch = false;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  modifySoutenance(soutenance): void {
    this.soutenancesService.setCurrentSoutenance(soutenance);
    this.router.navigate(['/admin/modifySoutenance']);
  }
  modifySession(session): void {
    this.soutenancesService.setCurrentSession(session);
    this.router.navigate(['/admin/modifySession']);
  }
}
