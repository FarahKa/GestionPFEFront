import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PfeService } from 'src/app/services/pfe.service';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-create-pfe',
  templateUrl: './create-pfe.component.html',
  styleUrls: ['./create-pfe.component.css']
})
export class CreatePfeComponent implements OnInit {

  shortLink: string = ""; 
  loading: boolean = false; // Flag variable 
  file: File = null;
  constructor(private pfeService: PfeService,
    private uploadFileService: UploadFileService) { }

  ngOnInit(): void {
  }
  onChange(event) { 
    this.file = event.target.files[0]; 
  } 

// OnClick of button Upload 
onUpload() { 
    this.loading = !this.loading; 
    console.log(this.file); 
    this.uploadFileService.upload(this.file).subscribe( 
        (event: any) => { 
            if (typeof (event) === 'object') { 

                // Short link via api response 
                this.shortLink = event.link; 

                this.loading = false; // Flag variable  
            } 
        } 
    ); 
} 
  createPFE(formulaire : NgForm) {
    console.log(formulaire.form.value)
    this.pfeService.createPfe(formulaire.form.value).subscribe(
      (response) => {
        console.log("got a good response");
        console.log(response);
      },
      error => console.log(error)
    )
  }
}
