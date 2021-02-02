import { HttpClient } from '@angular/common/http';
import { Papa } from 'ngx-papaparse';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent {

  closeResult = '';
  loading = false;
  //constructor(private modalService: NgbModal) { }

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


  constructor(private modalService: NgbModal,private papa: Papa) {

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
      const formData = new FormData();
      for (var i = 0; i < this.files.length; i++) { 

        formData.append("file[]", this.files[i]);

      }
   }
   onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);

}
  import(){
    this.loading = true;
    /*this.http.post('', formData)

      .subscribe(res => {

         console.log(res);
         this.alertService.success('Update successful', { keepAfterRouteChange: true });
          this.loading = false;


      })*/

      this.modalService.dismissAll();
  }


}
