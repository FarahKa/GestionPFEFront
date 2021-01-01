import { Component, OnInit } from '@angular/core';
import { Filiere, Session } from 'src/app/models';

@Component({
  selector: 'app-soutenances',
  templateUrl: './soutenances.component.html',
  styleUrls: ['./soutenances.component.css'],
})
export class SoutenancesComponent implements OnInit {
  sessions: Session[];
  filieres: Filiere[];
  constructor() {}

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
      { nom: 'session1', filieres: this.filieres },
      { nom: 'session2', filieres: this.filieres },
    ];
  }
}
