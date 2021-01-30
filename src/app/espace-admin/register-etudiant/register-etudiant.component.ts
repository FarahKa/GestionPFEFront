import { StudentService } from './../../services/student.service';
import { FiliereEnum } from '../../enums/filere.enum';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators , FormArray } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthentificationService } from '../../services/authentification.service';
import { AlertService } from '../../services/alert.service';
import { Role } from '../../models/role.model';
import { DepEnum } from '../../enums/departement.enum';

@Component({
    selector: 'app-register-etudiant',
    templateUrl: 'register-etudiant.component.html',
    styleUrls: ['./register-etudiant.component.css'] 
})
export class RegisterEtudiantComponent implements OnInit {
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
        //private router: Router,
        //private authenticationService: AuthentificationService,
        private studentService: StudentService,
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
            role:['Etudiant',Validators.required],
            filiere:['GL',Validators.required],
            ce:['',[Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(7),Validators.minLength(7)]],//[]
            year:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(4),Validators.minLength(4)]],//
            //additionalStudentInformation: this.formBuilder.array([this.createStudentItems()]),
           // items: this.formBuilder.array([ this.createStudentItems() ])
        });
    }

  /*  createStudentItems() {
        return this.formBuilder.group({
           filiere:['GL',Validators.required],
           ce:['',Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(7),Validators.minLength(7)],
           year:['',Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(4),Validators.minLength(4)],
        });
      }
     

*/
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
        this.studentService.registerStudent(this.registerForm.value)
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
