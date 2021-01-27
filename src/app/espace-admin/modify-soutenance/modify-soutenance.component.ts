import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { SoutenancesService } from '../soutenances/soutenances.service';

@Component({
  selector: 'app-modify-soutenance',
  templateUrl: './modify-soutenance.component.html',
  styleUrls: ['./modify-soutenance.component.css']
})
export class ModifySoutenanceComponent implements OnInit {

  soutenance : any;
  enseignants : any;

  constructor(private soutenancesService: SoutenancesService, private router : Router, private http : HttpService) { }

  ngOnInit(): void {
    this.soutenance = this.soutenancesService.getCurrentSoutenance();
    console.log(this.soutenance)
    if(this.soutenance === undefined){
      this.router.navigate(["/admin/soutenances"])
    } else {
      this.enseignants=this.http.getEnseignants()
    }
  }

}
