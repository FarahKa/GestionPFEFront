import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { UserService } from 'src/app/services/user.service';
import { User } from './../../models/user.model';
import { FiliereEnum } from './../../enums/filere.enum';
import { Student } from './../../models/student.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  etudiants: Student[]

  currentUser: User; 
  currentUserSubscription: Subscription;
  users: User[] = [];


  constructor(
      private authenticationService: AuthentificationService,
      private userService: UserService
  ) {
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
          this.currentUser = user;
      });
  }

  ngOnInit(): void {
   /* this.etudiants = [
      new  Student("123", "people1", "people1","people1@gamil",123, 123,FiliereEnum.gl,2020),
      new  Student("462", "people2", "people2", "people2@gmail", 462,462 ,FiliereEnum.gl,2020),
      new  Student("642", "people3","people3", "people3@gmail", 8745,8745 ,FiliereEnum.gl,2020)
    ];*/
    this.loadAllUsers();

  }



  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.currentUserSubscription.unsubscribe();
  }

  
  deleteUser(id: number) {
      this.userService.delete(id).pipe(first()).subscribe(() => {
          this.loadAllUsers()
      });
  }

  private loadAllUsers() {
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.users = users;
          console.log(this.users);
          console.log(users);
      });
  }
}
