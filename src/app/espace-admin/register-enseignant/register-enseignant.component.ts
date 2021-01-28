
import { Component, OnInit } from '@angular/core';
import { FiliereEnum } from '../../enums/filere.enum';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators , FormArray } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthentificationService } from '../../services/authentification.service';

import { AlertService } from '../../services/alert.service';
import { Role } from '../../models/role.model';
import { DepEnum } from '../../enums/departement.enum';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-register-enseignant',
  templateUrl: './register-enseignant.component.html',
  styleUrls: ['./register-enseignant.component.css']
})
export class RegisterEnseignantComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  values = Object.values;
  roles =Role;
  departements= DepEnum;
  fillieres= FiliereEnum;
  items: FormArray;
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthentificationService,
      private userService: StudentService,
      private alertService: AlertService
  ) { 
      // redirect to home if already logged in
     /* if (this.authenticationService.currentUserValue) { 
          this.router.navigate(['/']);
      }*/
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required,],
          cin: ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(8),Validators.minLength(8)]],
          phone: ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(8),Validators.minLength(8)]],
          email: ['', [Validators.required,Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          role:['Enseignant',Validators.required],
          departement:['Département Informatique et Mathématique'],
        
      });
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      console.log(this.registerForm.value);
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          console.log("invalid form");
          return;
      }

      this.loading = true;
      this.userService.registerStudent(this.registerForm.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('Registration successful', true);
                  this.loading = false;
                  //this.router.navigate(['/login']);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

}
