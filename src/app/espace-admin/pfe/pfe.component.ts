import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PfeService } from './pfe.service';

@Component({
  selector: 'app-pfe',
  templateUrl: './pfe.component.html',
  styleUrls: ['./pfe.component.css']
})
export class PfeComponent implements OnInit {

  pfes
  option
  filiere
  constructor(private pfeService: PfeService, private activatedRouteService : ActivatedRoute) { }

  ngOnInit(): void {
    this.option = this.activatedRouteService.snapshot.paramMap.get("option")
    this.filiere = this.activatedRouteService.snapshot.paramMap.get("filiere")
    console.log(this.option + " -- "+ this.filiere)
    console.log(this.pfeService.get_current_pfes())
    this.pfes = [
      {
        subject: "subject one heyyyy there woohoo",
        student_name: "sirine",
        student_lastname: "achour",
        student_id: "12451245",
        encadrants: [
          {
            name: "encadrant1"
          },
          {
            name: "encadrant2"
          }
        ]
      },
      {
        subject: "subject one heyyyy there woohoo",
        student_name: "sirine",
        student_lastname: "achour",
        student_id: "12451245",
        encadrants: []
      },
      {
        subject: "subject one heyyyy there woohoo",
        student_name: "sirine",
        student_lastname: "achour",
        student_id: "12451245",
      }
    ]
  }

}
