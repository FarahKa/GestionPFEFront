


import { Component, OnInit, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../../services/alert.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';







@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalEditComponent implements OnInit {
  form: FormGroup;
  @Input() id: number;
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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.minLength(6)]
  });


      this.userService.getById(this.id)
          .pipe(first())
          .subscribe(x => {
              this.f.firstName.setValue(x.firstname);
              this.f.lastName.setValue(x.lastname);
              this.f.username.setValue(x.username);
          });
  

}

get f() { return this.form.controls; }

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
  
  this.userService.update(this.form.value)
      .pipe(first())
      .subscribe(
          data => {
              this.alertService.success('Update successful', { keepAfterRouteChange: true });
              this.router.navigate(['..', { relativeTo: this.route }]);
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          });
}


}