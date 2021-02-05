import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PfeService {

  /*
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    }
   */

  url = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  get_current_pfes() {
    return this.http.get(this.url + "/pfe/" + localStorage.getItem("current_year") + "/all")
  }

  get_all_pfes() {
    return this.http.get(this.url + "/pfe/get/all")
  }

  update_pfe(sent_data) {
    console.log("here")
    console.log(sent_data)
    return this.http.put<any>(this.url + "/pfe/update", sent_data)
  }
}
