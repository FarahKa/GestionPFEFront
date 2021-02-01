import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = "http://localhost:3000"; //adresse nest

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  addSession(data : any) {
    return this.http.post(this.url + "/session/createSession", data)
  }

  getSoutenances(){
    return this.http.get(this.url + "/soutenance/all")
  }

  getSessions(){
    return this.http.get(this.url + "/session/all")
  }

  getEnseignants(){
    console.log("trying to get all teachers")
    return this.http.get(this.url + "/soutenance/allEnseignants")
  }

  assignEncadrant(idS : number, idE : string){
    return this.http.get(this.url + "/soutenance/all/" + idS + "/" + idE)
  }

  getEncadrant(idS : number){
    return this.http.get(this.url + "/soutenance/encadrant/" + idS)   
  }

  getPresident(idS : number){
    return this.http.get(this.url + "/session/president/" + idS)   
  }

  patchSoutenance(idS : number, data : any){
    return this.http.post(this.url + "/soutenance/patchSoutenance/" + idS, data)
  }
  patchSession(idS : number, data : any){
    return this.http.post(this.url + "/session/patchSession/" + idS, data)
  }

  getRogues() {
    return this.http.get(this.url + "/soutenance/rogue")
  }

  getJury(idSoutenance) {
    return this.http.get(this.url + "/soutenance/jury/" + idSoutenance)
  }
}
