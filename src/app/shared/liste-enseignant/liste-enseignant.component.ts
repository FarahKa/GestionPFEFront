import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher.model';

@Component({
  selector: 'app-liste-enseignant',
  templateUrl: './liste-enseignant.component.html',
  styleUrls: ['./liste-enseignant.component.css']
})
export class ListeEnseignantComponent implements OnInit {

  enseignants: Teacher[]
  constructor() { }

  ngOnInit(): void {
  }


}
