import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PfeService {

  url ="http://localhost:3000"
  constructor(private http: HttpClient) { }

  //there is a problem in this function. consider changing it bech t3addilha a year always idk like year 9999 ken t7eb
  //yjib kolchay in that case
  get_current_pfes(){
    return this.http.get(this.url + "/pfe/all/"+localStorage.getItem("currentYear")+"")
  }

  get_all_pfes() {
    return this.http.get(this.url + "/pfe/all")
  }

  get_students_noPFE() {
    return this.http.get(this.url + "/pfe/studentsNoPFE")
  }

  create_pfe( body ) {
    return this.http.post(this.url + "/pfe/create", body)
  }

}
