import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DownloadFileService {

  constructor(private http: HttpClient) { }

  public downloadFile(filename: string, relevantEntity: string): Observable<HttpResponse<Blob>> {
    console.log("FileName: "+filename);
    const headers = new HttpHeaders().set('Accept', 'application/pdf');
    return this.http.get('http://localhost:8080/api/files/system/'+ filename +"/"+ relevantEntity, { headers: headers, observe: 'response', responseType: 'blob'});
    }

}
