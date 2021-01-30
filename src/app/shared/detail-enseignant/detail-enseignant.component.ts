import { Component, OnInit } from '@angular/core';
import { DepEnum } from 'src/app/enums/departement.enum';
import { Teacher } from 'src/app/models/teacher.model';

@Component({
  selector: 'app-detail-enseignant',
  templateUrl: './detail-enseignant.component.html',
  styleUrls: ['./detail-enseignant.component.css']
})
export class DetailEnseignantComponent implements OnInit {

  enseignant: Teacher;
  constructor() { }

  ngOnInit(): void {
    this.enseignant = new Teacher("642", "mariem","chatar", "chatar@gmail", 8745, DepEnum.MathInfo)
  }

}
