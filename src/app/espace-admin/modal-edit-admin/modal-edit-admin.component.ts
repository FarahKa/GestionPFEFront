import { UserService } from 'src/app/services/user.service';



import { Component, OnInit, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../../services/alert.service';
import { User } from '../../models/user.model';






@Component({
  selector: 'app-modal-edit-admin',
  templateUrl: './modal-edit-admin.component.html',
  styleUrls: ['./modal-edit-admin.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalEditAdminComponent implements OnInit {
  form: FormGroup;
  @Input() cin: number;
  loading = false;
  submitted = false;
  user:User;
  
  constructor(config: NgbModalConfig, 
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) {
    
  }
ngOnInit(){

  this.form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      cin: ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(8),Validators.minLength(8)]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(8),Validators.minLength(8)]],
      password: ['', Validators.minLength(6)]
  });

      this.reset();
  
}


  get f() { return this.form.controls; }

  reset()
  { 
    this.userService.getAdminById(this.cin)
    .pipe(first())
    .subscribe(user => {
      console.log("dsfds",user);
        this.f.firstname.setValue(user.firstname);
        this.f.lastname.setValue(user.lastname);
        this.f.cin.setValue(user.cin);
        this.f.phoneNumber.setValue(user.phoneNumber);
        this.f.email.setValue(user.email);

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