import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PFEStateEnum } from 'src/app/enums/pfe-state.enum';
import { Pfe } from 'src/app/models/pfe.model';
import { HttpEventType, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-detail-pfe',
  templateUrl: './detail-pfe.component.html',
  styleUrls: ['./detail-pfe.component.css']
})
export class DetailPfeComponent implements OnInit {

  pfe: Pfe;
  state1 = PFEStateEnum.s1;
  state2 = PFEStateEnum.s2;
  constructor() { }

  ngOnInit(): void {
    this.pfe = new Pfe(14, PFEStateEnum.s1
      , "application de gestion des pfe", true, "link",
      "fssm", true);
  }


  onSubmit(formulaire: NgForm) {
    console.log(formulaire)
  }


}
