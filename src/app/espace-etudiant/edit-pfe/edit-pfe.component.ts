import { Component, OnInit } from '@angular/core';
import { PfeService } from 'src/app/espace-admin/pfe/pfe.service';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-edit-pfe',
  templateUrl: './edit-pfe.component.html',
  styleUrls: ['./edit-pfe.component.css']
})
export class EditPfeComponent implements OnInit {

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

}
