import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-espace-etudiant',
  templateUrl: './espace-etudiant.component.html',
  styleUrls: ['./espace-etudiant.component.css']
})

export class EspaceEtudiantComponent implements OnInit {

  idStudent: number = 123456;
  student: Student;
  constructor(private studentService: StudentService ) { }

  ngOnInit(): void {
    this.studentService.getStudentById(this.idStudent).subscribe(
      student => {
        console.log(student);
        console.log("hi");
        this.student = new Student(student.cin, student.firstname,
          student.lastname, student.email, student.phoneNumber,
          student.student_id_number, student.filiere, student.year);
        console.log(this.student);
      }
    );
  }
  

}
