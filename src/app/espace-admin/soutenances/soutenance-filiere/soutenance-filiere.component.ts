import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PrettySidebarService } from 'src/app/components/pretty-sidebar/pretty-sidebar.service';
import { SoutenancesService } from '../soutenances.service';

@Component({
  selector: 'app-soutenance-filiere',
  templateUrl: './soutenance-filiere.component.html',
  styleUrls: ['./soutenance-filiere.component.css']
})
export class SoutenanceFiliereComponent implements OnInit {

  filiere : string;
  selectedItemSubject

  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private sidebarService : PrettySidebarService,
    private soutenancesService : SoutenancesService

  ) { }

  ngOnInit(): void {
    console.log("this component exists")
    // this.route.queryParamMap.subscribe((data : ParamMap) => {
    //   console.log("what we got from route:" + data)
    //   //this.filiere = params['filiere'];
    // });
    // console.log(this.route.snapshot.queryParams);

    this.filiere = this.soutenancesService.currentFiliere
          //TODO: delete this when in prod and roles work correctly
          localStorage.setItem('gestion_pfe_role', 'admin');
          this.selectedItemSubject = this.sidebarService.subjectSelectedItem
          this.selectedItemSubject.subscribe(
            (item) => {
              console.log("yo")
              this.soutenancesService.currentFiliere = item.item
              this.filiere = item.item
              this.router.navigate(['/admin/soutenances/filieres', item.item])
            })
  }



}
