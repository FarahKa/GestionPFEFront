import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Soutenance } from '../models/soutenance.model';



@Injectable({
  providedIn: 'root'
})
export class SoutenanceService {

  base_url="http://localhost:3000/soutenance/"
  constructor(private http: HttpClient) { }

  getSoutenanceByStudentId(studentId: number): any {
    return this.http.get(this.base_url+ `soutenanceByStudentId/`+studentId);
  }
}
