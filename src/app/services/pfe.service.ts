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
    return this.http.get<Pfe>(this.base_url+ `student/` + id);
  }
  
  createPfe(data: any){
    return this.http.post<Pfe>(this.base_url+`create`, data);
  }

  editPfe(pfe: any) {
    return this.http.put(this.base_url+ `edit/`, pfe);
  }
}
