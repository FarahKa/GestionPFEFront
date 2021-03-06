import { Component, Input, OnInit } from '@angular/core';
import { DepEnum } from 'src/app/enums/departement.enum';
import { EnseignantsComponent } from 'src/app/espace-admin/enseignants/enseignants.component';
import { Session } from 'src/app/models/session.model';
import { Soutenance } from 'src/app/models/soutenance.model';
import { Teacher } from 'src/app/models/teacher.model';
import { HttpService } from 'src/app/services/http.service';
import { SoutenanceService } from 'src/app/services/soutenance.service';

@Component({
  selector: 'app-detail-soutenance',
  templateUrl: './detail-soutenance.component.html',
  styleUrls: ['./detail-soutenance.component.css']
})
export class DetailSoutenanceComponent implements OnInit {

  @Input() student_id : number;
  soutenance: any;
  noSoutenance = true;
  session: Session= new Session(11, "session5", new Date(), new Date());;
  president: Teacher;
  jury: Teacher[]=[];
  constructor(private soutenanceService: SoutenanceService,
    private httpService: HttpService ) { }

  ngOnInit(): void {
    this.soutenanceService.getSoutenanceByStudentId(this.student_id).subscribe(
      soutenance => {
        if (soutenance.session){
          this.noSoutenance = false;
        }
        console.log("soutenance here",soutenance);
        this.soutenance = new Soutenance(soutenance.id, soutenance.session.start_date, soutenance.pfe["id"], soutenance.session["id"]);
        this.session = new Session(soutenance.session.id, soutenance.session.name,
        soutenance.session["start_date"], soutenance.session["end_date"]);
        this.httpService.getPresident(this.session.id).subscribe(
          president => 
        {
          console.log("president here", president);
          this.president = new Teacher(president.cin.cin, president.firstname, president.lastname, 
            president.cin.email, president.phoneNumber, president.departement);
        });
        this.httpService.getJury(this.soutenance.id).subscribe(
          jury => {
            console.log("jury here", jury);
            jury.forEach(enseignant => {
              this.jury.push(new Teacher(enseignant.cin , enseignant.firstname,
                enseignant.firstname, enseignant.lastname, enseignant.phoneNumber,
                enseignant.departement));
            });
          }
        )
        });
    
    
    
  }

}
