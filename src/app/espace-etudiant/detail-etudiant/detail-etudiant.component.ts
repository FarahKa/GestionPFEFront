import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FiliereEnum } from 'src/app/enums/filere.enum';
import { Student } from 'src/app/models/student.model';
@Component({
  selector: 'app-detail-etudiant',
  templateUrl: './detail-etudiant.component.html',
  styleUrls: ['./detail-etudiant.component.css'],
})
export class DetailEtudiantComponent implements OnInit {

  etudiant: Student;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.etudiant = new Student("111","sahar", "derbel", "sahar@gmail.com" ,3403 ,11 , FiliereEnum.gl, 2020);
  }
  

}
