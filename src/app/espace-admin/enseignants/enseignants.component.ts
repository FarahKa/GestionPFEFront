import { Component, OnInit } from '@angular/core';
import { DepEnum } from 'src/app/enums/departement.enum';
import { Teacher } from 'src/app/models/teacher.model';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent implements OnInit {
  enseignants: Teacher[]
  constructor() { }

  ngOnInit(): void {
    this.enseignants = [
      new Teacher("123", "aymen", "sellaouiti","aymen@gamil",123, DepEnum.MathInfo),
      new Teacher("462", "lilia", "sfaxi", "lilia@gmail", 462, DepEnum.MathInfo),
      new Teacher("642", "mariem","chatar", "chatar@gmail", 8745, DepEnum.MathInfo)
    ]
  }

  filterEnseignantByDep(dep: DepEnum) {
    return this.enseignants.filter(enseignant => {
      return enseignant.departement == dep;
    })
  }
}
