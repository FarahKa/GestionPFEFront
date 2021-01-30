import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { StudentService } from 'src/app/services/student.service';
import { User } from './../../models/user.model';
import { FiliereEnum } from './../../enums/filere.enum';
import { Student } from './../../models/student.model';
import { Component, OnInit } from '@angular/core';
import { PrettySidebarService } from 'src/app/components/pretty-sidebar/pretty-sidebar.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  etudiants: Student[]
  etudiants_to_display: Student[]

  currentUser: User;
  currentUserSubscription: Subscription;

  users: Student[] = [];
  selectedItemSubject;


  constructor(
    private authenticationService: AuthentificationService,
    private studentService: StudentService,
    private sidebarService: PrettySidebarService
  ) {
  }

  ngOnInit(): void {
    this.etudiants = [
      new Student("123", "people1", "people1", "people1@gamil", 123, 123, FiliereEnum.gl, 2020),
      new Student("462", "people2", "people2", "people2@gmail", 462, 462, FiliereEnum.gl, 2020),
      new Student("642", "people3", "people3", "people3@gmail", 8745, 8745, FiliereEnum.gl, 2020)
    ];
    //this.loadAllUsers();
    this.etudiants_to_display = this.etudiants;
    this.selectedItemSubject = this.sidebarService.subjectSelectedItem
    this.selectedItemSubject.subscribe(
      (item) => {
        console.log(item)
        this.etudiants_to_display = this.etudiants.filter((e) => {return e.filiere == item})
      })
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;
      });
  }



 /* ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
    this.selectedItemSubject.unsubscribe();
  }
*/

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
