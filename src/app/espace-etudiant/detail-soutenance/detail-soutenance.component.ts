import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-soutenance',
  templateUrl: './detail-soutenance.component.html',
  styleUrls: ['./detail-soutenance.component.css']
})
export class DetailSoutenanceComponent implements OnInit {

  @Input() student_id : number;
  constructor() { }

  ngOnInit(): void {
  }

}
