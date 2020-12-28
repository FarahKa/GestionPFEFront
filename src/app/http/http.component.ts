import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  url = "http://localhost:3000"; //adresse nest

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

}
