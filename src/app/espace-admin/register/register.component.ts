import { EnseignantService } from '../../services/enseignant.service';
import { StudentService } from '../../services/student.service';
import { FiliereEnum } from '../../enums/filere.enum';
import { DepEnum } from '../../enums/departement.enum';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../../services/alert.service';
import { Role } from '../../models/role.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading: boolean;
  submitted: boolean;
  departements= DepEnum;
  fillieres= FiliereEnum;
  values;
  roles;
  fields;

  constructor(
    private formBuilder: FormBuilder,
    //private router: Router,
    //private authenticationService: AuthentificationService,
    private userService: UserService,
    private alertService: AlertService,

  ) {
    // redirect to home if already logged in
    /* if (this.authenticationService.currentUserValue) {
         this.router.navigate(['/']);
     }*/
  }

  ngOnInit() {

    this.loading = false;
    this.submitted = false;
    this.values = Object.values;
    this.roles = Role;
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required,],
      cin: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(8), Validators.minLength(8)]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(8), Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['Admin', Validators.required],

    });
    this.fields = this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    console.log(this.registerForm.value);
    if (this.registerForm.invalid) {
      console.log("invalid form");
      return;
    }
    console.log(this.registerForm.invalid)

    this.loading = true;
 
    this.userService.registerUser(this.registerForm.value)
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
  
  onOptionsSelected(role:Role){
     if (role==Role.Teacher)
     { this.registerForm.addControl('departement',new FormControl ('Département Informatique et Mathématique',[Validators.required]) );
       this.registerForm.removeControl('filiere');
       this.registerForm.removeControl('student_id_number');
       this.registerForm.removeControl('year');
    }
       
      else if(role == Role.Student)
      {this.registerForm.addControl('filiere',new FormControl ('GL',[Validators.required]));
       this.registerForm.addControl('student_id_number',new FormControl ('',[Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(7),Validators.minLength(7)]));
       this.registerForm.addControl('year',new FormControl ('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(4),Validators.minLength(4)]));
       this.registerForm.removeControl('departement');
      }
  }
}

