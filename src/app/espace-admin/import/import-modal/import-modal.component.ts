import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AlertService } from './../../../services/alert.service';
import { StudentService } from 'src/app/services/student.service';
import { Role } from './../../../models/role.model';
import { Papa } from 'ngx-papaparse';
import { Component, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-import-modal',
  templateUrl: './import-modal.component.html',
  styleUrls: ['./import-modal.component.css']
})
export class ImportModalComponent {
  @Input() userType: Role;

  closeResult = '';
  loading = false;
  formData = new FormData();

  constructor(private modalService: NgbModal, private papa: Papa, private userService: UserService, private alertService: AlertService,private router: Router,) {

  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  title = 'dropzone';
  files: File[] = [];
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
    
  }
  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);

  }
  import() {
    this.loading = true;
    for (var i = 0; i < this.files.length; i++) {
      this.formData.append("files[]", this.files[i],this.files[i].name);
    }


      this.userService.importUsers(this.formData)
        .subscribe(
          (res) => {
            this.alertService.success('Importation reussite', { keepAfterRouteChange: true });
            this.loading = false;
            this.files=[];
            this.formData = new FormData();
            this. reloadCurrentRoute();
          },
          (error) => {
            this.alertService.error('Probleme lors de l\'importation');
            this.loading = false;
            this.files=[];
            this.formData = new FormData();
          }
        )

  

    this.modalService.dismissAll();
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}



}
