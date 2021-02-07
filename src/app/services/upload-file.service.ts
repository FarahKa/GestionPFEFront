import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  baseUrl = 'http://localhost:8080/auth/'
  constructor(private http: HttpClient) { }
   
  upload(file):Observable<any> { 
    const formData = new FormData();  
    formData.append("file", file, file.name); 
    return this.http.post(this.baseUrl, formData) 
} 
  }
