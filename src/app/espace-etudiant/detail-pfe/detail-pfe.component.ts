import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PFEStateEnum } from 'src/app/enums/pfe-state.enum';
import { Pfe } from 'src/app/models/pfe.model';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { PfeService } from 'src/app/services/pfe.service';
import { inputs } from '@syncfusion/ej2-angular-dropdowns/src/drop-down-list/dropdownlist.component';
@Component({
  selector: 'app-detail-pfe',
  templateUrl: './detail-pfe.component.html',
  styleUrls: ['./detail-pfe.component.css']
})
export class DetailPfeComponent implements OnInit {

  pfe: Pfe;
  @Input() student_id : number;
  state1 = PFEStateEnum.s1;
  state2 = PFEStateEnum.s2;
  constructor(private pfeService: PfeService) { }

  ngOnInit(): void {
    this.pfe = new Pfe(14, PFEStateEnum.s1
      , "application de gestion des pfe", true, "link",
      "fssm", true);
      this.pfeService.getPfeByStudentId(this.student_id).subscribe(
        pfe => {
          console.log("pfe");
          console.log(pfe);
          this.pfe = pfe;
        }
      );
  }


  onSubmit(formulaire: NgForm) {
    console.log(formulaire)
  }


}
