import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchbarService {

  subjectSearchFields : Subject<Object> = new Subject<Object>()

  constructor() { }
}
