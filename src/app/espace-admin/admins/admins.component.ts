import { UserService } from 'src/app/services/user.service';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AuthentificationService } from 'src/app/services/authentification.service';

import { User } from './../../models/user.model';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  currentUser: User; 
  currentUserSubscription: Subscription;
  users: User[] = [];


  constructor(
      private authenticationService: AuthentificationService,
      private userService: UserService,
      private cdr:ChangeDetectorRef
  ) {
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
          this.currentUser = user;
      });
  }

  ngOnInit(): void {
    this.loadAllUsers();

  }



  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.currentUserSubscription.unsubscribe();
  }

  
  deleteUser(id: string) {
      this.userService.deleteAdmin(id).pipe(first()).subscribe(() => {
          this.loadAllUsers()
      });
  }

  private loadAllUsers() {
      this.userService.getAllAdmins().pipe(first()).subscribe(users => {
          this.users = users;
          console.log(this.users);
      });
  }
}
