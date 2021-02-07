import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FiliereEnum } from 'src/app/enums/filere.enum';
import { Student } from 'src/app/models/student.model';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-detail-etudiant',
  templateUrl: './detail-etudiant.component.html',
  styleUrls: ['./detail-etudiant.component.css'],
})
export class DetailEtudiantComponent implements OnInit {

  @Input() etudiant: Student;
  editAccountForm: FormGroup;
  loading: boolean;
  submitted: boolean;
  fields;
  values;
  constructor(private router: Router,private alertService: AlertService,
      private formBuilder: FormBuilder, private userService: UserService) { }






  ngOnInit(): void { 
    console.log("etudiant");
    console.log(this.etudiant);
    this.etudiant = new Student("111","sahar", "derbel", "sahar@gmail.com" ,3403 ,11 , FiliereEnum.gl, 2020);
    this.loading = false;
    this.submitted = false;
    this.values = Object.values;
    this.editAccountForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.fields = this.editAccountForm.controls;
  }
  

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    console.log(this.editAccountForm.value);
    if (this.editAccountForm.invalid) {
      console.log("invalid form");
      return;
    }
    console.log(this.editAccountForm.invalid)

    this.loading = true;
 
    this.userService.registerUser(this.editAccountForm.value)
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
