import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { PfeService } from 'src/app/services/pfe.service';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-create-pfe-etudiant',
  templateUrl: './create-pfe-etudiant.component.html',
  styleUrls: ['./create-pfe-etudiant.component.css']
})
export class CreatePfeEtudiantComponent implements OnInit {

  @Input() studentCin:string;
  shortLink: string = ""; 
  loading: boolean = false; // Flag variable 
  file: File = null;
  fieldsE = { text: 'lastname', value: 'cin.cin' };
  textE = "Choisir l'encadrant";
  enseignants : any;
  constructor(private pfeService: PfeService,
    private router: Router,
    private http: HttpService,
    private uploadFileService: UploadFileService) { }

  ngOnInit(): void {
    this.http.getEnseignants().subscribe((response : any) => {
      console.log(response)
      this.enseignants= response
    })
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
    
    formulaire.form.value["etudiant"]= this.studentCin;
    console.log(formulaire.form.value);
    this.pfeService.createPfe(formulaire.form.value).subscribe(
      (response) => {
        console.log("got a good response");
        console.log(response);
        this.router.navigate(["/etudiant"]);
      },
      error => console.log(error)
    )
  }
}
