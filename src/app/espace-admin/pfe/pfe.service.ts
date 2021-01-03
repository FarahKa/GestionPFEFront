import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PfeService {

  constructor(private http: HttpClient) { }

  async get_all_pfes(){
    return await this.http.get("localhost:3000/pfe/pfes_by_mentor_id_subject_host_ent_year")
  }
}
