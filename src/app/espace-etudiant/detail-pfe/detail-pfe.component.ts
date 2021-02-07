import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PFEStateEnum } from 'src/app/enums/pfe-state.enum';
import { Pfe } from 'src/app/models/pfe.model';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { PfeService } from 'src/app/services/pfe.service';
import { inputs } from '@syncfusion/ej2-angular-dropdowns/src/drop-down-list/dropdownlist.component';
import { UploadFileService } from 'src/app/services/upload-file.service';
@Component({
  selector: 'app-detail-pfe',
  templateUrl: './detail-pfe.component.html',
  styleUrls: ['./detail-pfe.component.css']
})
export class DetailPfeComponent implements OnInit {

  pfe: Pfe = null;
  @Input() student_id : number;
  state1 = PFEStateEnum.s1;
  state2 = PFEStateEnum.s2;
  shortLink: string = ""; 
  loading: boolean = false; // Flag variable 
  file: File = null;
  constructor(private pfeService: PfeService,
    private uploadFileService: UploadFileService) { }

  ngOnInit(): void {
    //this.pfe = new Pfe(14, PFEStateEnum.s1
    //  , "application de gestion des pfe", true, "link",
    // "fssm", true);
    this.pfeService.getPfeByStudentId(this.student_id).subscribe(
        pfe => {
          console.log("pfe");
          console.log(pfe);
          this.pfe = pfe;
        }
      );}
  

  onSubmit(formulaire: NgForm) {
    console.log(formulaire);
    this.pfeService.editPfe(formulaire.form.value)
  } onChange(event) { 
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
