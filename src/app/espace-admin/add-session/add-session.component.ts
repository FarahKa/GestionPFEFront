import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit {

  constructor(private http : HttpService, private router : Router) { }

  ngOnInit(): void {
  }

  addSession (formulaire : NgForm) {
    console.log(formulaire.form.value)
    this.http.addSession(formulaire.form.value).subscribe(
      (response) => {
        console.log("got a good response")
        console.log(response)
        this.router.navigate(["/admin/soutenances"])
      },
      error => console.log(error)
    )
  }

}
