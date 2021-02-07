import { Component, OnInit } from '@angular/core';
import { AnneeScolaire } from 'src/app/models/anneeScolaire';
import { Student } from 'src/app/models/student.model';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { PfeService } from 'src/app/services/pfe.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-espace-etudiant',
  templateUrl: './espace-etudiant.component.html',
  styleUrls: ['./espace-etudiant.component.css']
})

export class EspaceEtudiantComponent implements OnInit {

  idStudent: number = 1100339;
  cin: string;
  student: Student;
  year: AnneeScolaire;
  soutenance: boolean=false;
  new:boolean=true;
  constructor(private studentService: StudentService,
    private pfeService: PfeService ,
    private authenticationService: AuthentificationService) { }

  ngOnInit(): void {
    this.cin = this.authenticationService.currentUserValue.cin;

    this.studentService.getStudentByCin(this.cin).subscribe(
      student => {
        this.student = new Student(student.cin["cin"], student.firstname,
          student.lastname, student.cin["email"], student.phoneNumber,
          student.student_id_number, student.filiere, student.year["year"]);
          this.idStudent = student.student_id_number;
          this.soutenance=(student.soutenance!==null);
          this.new=!this.soutenance;
        console.log(this.soutenance);
      
      }
    );
  }
  

}
