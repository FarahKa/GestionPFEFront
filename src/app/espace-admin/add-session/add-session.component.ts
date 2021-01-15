import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit {

  constructor(private http : HttpService) { }

  ngOnInit(): void {
  }

  addSession (formulaire : NgForm) {
    console.log(formulaire.form.value)
    this.http.addSoutenance(formulaire.form.value).subscribe(
      (response) => {
        console.log(response)
      },
      error => console.log(error)
    )
  }

}
