import { Component, OnInit } from '@angular/core';
import { AnneeScolaire } from 'src/app/models/anneeScolaire';
import { Student } from 'src/app/models/student.model';
import { PfeService } from 'src/app/services/pfe.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-espace-etudiant',
  templateUrl: './espace-etudiant.component.html',
  styleUrls: ['./espace-etudiant.component.css']
})

export class EspaceEtudiantComponent implements OnInit {

  idStudent: number = 123456;
  student: Student;
  year: AnneeScolaire;
  showPFE: boolean = true;
  constructor(private studentService: StudentService,
    private pfeService: PfeService ) { }

  ngOnInit(): void {
    this.studentService.getStudentById(this.idStudent).subscribe(
      student => {
        this.year = new AnneeScolaire(student.year);
        console.log(student);
        console.log("hi");
        this.student = new Student(student.cin, student.firstname,
          student.lastname, student.email, student.phoneNumber,
          student.student_id_number, student.filiere, student.year["year"]);
          this.idStudent = student.student_id_number;
        console.log(this.student);
      }
    );
  }
  

}
