import { Student } from './../../models/student.model';
import { StudentService } from 'src/app/services/student.service';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { User } from './../../models/user.model';
import { first } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { DepEnum } from 'src/app/enums/departement.enum';
import { Teacher } from 'src/app/models/teacher.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent implements OnInit {
  enseignants: Teacher[]


  ngOnInit(): void {
    this.enseignants = [
      new Teacher("123", "aymen", "sellaouiti","aymen@gamil",123, DepEnum.MathInfo),
      new Teacher("462", "lilia", "sfaxi", "lilia@gmail", 462, DepEnum.MathInfo),
      new Teacher("642", "mariem","chatar", "chatar@gmail", 8745, DepEnum.MathInfo)
    ]
    //this.loadAllUsers();
  }

  filterEnseignantByDep(dep: DepEnum) {
    return this.enseignants.filter(enseignant => {
      return enseignant.departement == dep;
    })
  }
//to refactor etudiant ==> teacher MZ

  currentUser: User; 
  currentUserSubscription: Subscription;
  etudiants: Student[] = [];


  constructor(
      private authenticationService: AuthentificationService,
      private studentService: StudentService
  ) {
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
          this.currentUser = user;
      });
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.currentUserSubscription.unsubscribe();
  }

  
  deleteUser(id: number) {
      this.studentService.deleteStudent(id).pipe(first()).subscribe(() => {
          this.loadAllUsers()
      });
  }

  private loadAllUsers() {
      this.studentService.getAllStudents().pipe(first()).subscribe(etudiants => {
          this.etudiants = etudiants;
          console.log(this.etudiants);
      });
  }
}
