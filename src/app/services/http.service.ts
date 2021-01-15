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

  addSoutenance(data : any) {
    return this.http.get(this.url, data)
  }
}
