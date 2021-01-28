import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormArray } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../../services/alert.service';
import { Role } from '../../models/role.model';
@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  registerForm: FormGroup;
    loading = false;
    submitted = false;
    values = Object.values;
    roles =Role;

    constructor(
        private formBuilder: FormBuilder,
        //private router: Router,
        //private authenticationService: AuthentificationService,
        private userService: UserService,
        private alertService: AlertService
    ) { 
        // redirect to home if already logged in
       /* if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }*/
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required,],
            cin: ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(8),Validators.minLength(8)]],
            phoneNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(8),Validators.minLength(8)]],
            email: ['', [Validators.required,Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            role:['Admin',Validators.required],
           
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
        this.userService.registerAdmin(this.registerForm.value)
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
