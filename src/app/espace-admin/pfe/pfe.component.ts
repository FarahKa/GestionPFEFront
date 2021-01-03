import { Component, OnInit } from '@angular/core';
import { PfeService } from './pfe.service';

@Component({
  selector: 'app-pfe',
  templateUrl: './pfe.component.html',
  styleUrls: ['./pfe.component.css']
})
export class PfeComponent implements OnInit {

  constructor(private pfeService: PfeService) { }

  pfes

  ngOnInit(): void {
    console.log(this.pfeService.get_all_pfes())
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
