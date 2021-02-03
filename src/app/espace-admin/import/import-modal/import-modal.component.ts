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

  constructor(private modalService: NgbModal, private papa: Papa, private studentService: StudentService, private alertService: AlertService) {

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





  ConvertCSVtoJSON() {
    console.log(JSON.stringify(this.test));
    // let csvData = '"Hello","World!"';
    // this.papa.parse(csvData, {
    //   complete: (results) => {
    //     console.log('Parsed  : ', results.data[0][1]);
    //     // console.log(results.data.length);
    //   }
    // });
  }
  test = [];
  handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    var file = files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event: any) => {
      var csv = event.target.result; // Content of CSV file
      this.papa.parse(csv, {
        skipEmptyLines: true,
        header: true,
        complete: (results) => {
          for (let i = 0; i < results.data.length; i++) {
            let orderDetails = {
              order_id: results.data[i].Address,
              age: results.data[i].Age
            };
            this.test.push(orderDetails);
          }
          // console.log(this.test);
          console.log('Parsed: k', results.data);
        }
      });
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

    if (this.userType == Role.Student) {
      this.studentService.importStudents(this.formData)
        .subscribe(
          (res) => {
            this.alertService.success('Importation reussite', { keepAfterRouteChange: true });
            this.loading = false;
            this.files=[];
            this.formData = new FormData();

          },
          (error) => {
            this.alertService.error('Probleme lors de l\'importation');
            this.loading = false;
            this.files=[];
            this.formData = new FormData();
          }
        )

    }
    else {


    }

    this.modalService.dismissAll();
  }



}
