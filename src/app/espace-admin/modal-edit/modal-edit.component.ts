import { DepEnum } from './../../enums/departement.enum';
import { FiliereEnum } from './../../enums/filere.enum';
import { Role } from './../../models/role.model';
import { UserService } from 'src/app/services/user.service';



import { Component, OnInit, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../../services/alert.service';
import { User } from '../../models/user.model';






@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalEditComponent implements OnInit {
  form: FormGroup;
  @Input() cin: number;
  loading = false;
  submitted = false;
  user: User;
  @Input() role: Role;
  departements = DepEnum;
  fillieres = FiliereEnum;
  roles = Role;
  values = Object.values;

  constructor(config: NgbModalConfig,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) {

  }
  ngOnInit() {

    this.form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cin: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(8), Validators.minLength(8)]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(8), Validators.minLength(8)]],
      password: ['', Validators.minLength(6)]
    });
    if (this.role == Role.Teacher) {
      this.form.addControl('departement', new FormControl('Département Informatique et Mathématique', [Validators.required]));

    }
    else if (this.role == Role.Student) {
      this.form.addControl('filiere', new FormControl('GL', [Validators.required]));
      this.form.addControl('ce', new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(7), Validators.minLength(7)]));
      this.form.addControl('year', new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(4), Validators.minLength(4)]));
    }
    this.reset();
  }


  get fields() { return this.form.controls; }

  reset() {
    //import data 
    if (this.role == Role.Teacher) {


    }
    else if (this.role == Role.Student) {


    }


    this.userService.getAdminById(this.cin)
      .pipe(first())
      .subscribe(user => {
        console.log("dsfds", user);
        this.fields.firstname.setValue(user.firstname);
        this.fields.lastname.setValue(user.lastname);
        this.fields.cin.setValue(user.cin);
        this.fields.phoneNumber.setValue(user.phoneNumber);
        this.fields.email.setValue(user.email);
      });

  }

  open(content) {
    this.modalService.open(content);
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.updateUser();

  }

  private updateUser() {

    this.userService.updateAdmin(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Update successful', { keepAfterRouteChange: true });
          this.loading = false;
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }


}