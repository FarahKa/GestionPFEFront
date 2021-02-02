import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pfe } from '../models/pfe.model';

@Injectable({
  providedIn: 'root'
})
export class PfeService {

  base_url="http://localhost:3000/pfe/"
  constructor(private http: HttpClient) { }

  getPfeByStudentId(id: number) {
    return this.http.get<Pfe>(this.base_url+ `pfes_by_student_id_year/` + id);
  }
}
