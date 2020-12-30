import { Component, OnInit } from '@angular/core';


export class Soutenance {
  nom: string;
  etudiant: string;
}

export class Session {
  nom: string;
  soutenances: Soutenance[];
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  sessions: Session[];

  constructor() {}

  ngOnInit(): void {
    this.sessions = [
      {
        nom: 'ba',
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
      {
        nom: 'cd',
        soutenances: [
          { nom: 'une soutenance', etudiant: 'machintruc' },
          { nom: 'une soutenance', etudiant: 'machintruc' },
        ],
      },
    ];
  }
}
