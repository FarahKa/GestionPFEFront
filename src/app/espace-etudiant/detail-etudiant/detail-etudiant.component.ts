import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FiliereEnum } from 'src/app/enums/filere.enum';
import { Student } from 'src/app/models/student.model';
import { User } from 'src/app/models/user.model';
import { AlertService } from 'src/app/services/alert.service';
import { StudentService } from 'src/app/services/student.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-detail-etudiant',
  templateUrl: './detail-etudiant.component.html',
  styleUrls: ['./detail-etudiant.component.css'],
})
export class DetailEtudiantComponent implements OnInit, OnChanges {

  @Input() cin: string="11108509" ;
  userEtudiant: User;
  loading: boolean;
  submitted: boolean;
  fields;
  values;
  student: Student;
  email: string="";
  password: string;
  ready: boolean=true;
  constructor(private router: Router,
    private studentService: StudentService,
    private alertService: AlertService,
    private formBuilder: FormBuilder, private userService: UserService) { }
  
    ngOnChanges(changes: SimpleChanges): void {
    if (changes["student"]) {
      console.log("hii");
    }
  }

  ngOnInit(): void { 
    this.ready = false;
    this.loading = false;
    this.submitted = false;
    this.values = Object.values;
    console.log("here");
    console.log(this.student);
    this.studentService.getStudentByCin(this.cin).subscribe(
      student => {
        console.log("heree");
        console.log(student.firstname);
        this.ready=true;
        this.student = new Student(student.cin["cin"], student.firstname,
          student.lastname, student.cin["email"], student.phoneNumber,
          student.student_id_number, student.filiere, student.year["year"]);
        console.log(this.student);
        
        });
          
        }
  

  edit(editAccountForm: NgForm) {
    this.submitted = true;
    editAccountForm.form.value["cin"]=this.cin;
    console.log(editAccountForm.form.value);
    this.userService.updateUser(editAccountForm.form.value).subscribe(response =>{
    console.log("all good!");
    })
  

    this.loading = true;

  }
}
