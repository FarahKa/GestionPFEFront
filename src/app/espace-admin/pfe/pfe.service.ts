import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PfeService {

  url ="http://localhost:3000"
  constructor(private http: HttpClient) { }

  get_current_pfes(){
    return this.http.get(this.url + "/pfe/"+localStorage.getItem("current_year")+"/all")
  }

  get_all_pfes() {
    return this.http.get(this.url + "/pfe/all")
  }

}
