import { Component, Input, OnInit } from '@angular/core';
import { Soutenance } from 'src/app/models';
import { SoutenanceService } from 'src/app/services/soutenance.service';

@Component({
  selector: 'app-detail-soutenance',
  templateUrl: './detail-soutenance.component.html',
  styleUrls: ['./detail-soutenance.component.css']
})
export class DetailSoutenanceComponent implements OnInit {

  @Input() student_id : number;
  soutenance: Soutenance;
  constructor(private soutenanceService: SoutenanceService) { }

  ngOnInit(): void {
    this.soutenance = new Soutenance();
    console.log("here soutenance");
    console.log(this.student_id);
    this.soutenanceService.getSoutenanceByStudentId(this.student_id).subscribe(
      soutenance => {
        console.log(soutenance);

      }
    );
  }

}
