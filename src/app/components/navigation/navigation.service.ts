import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  subjectSelectedItem : Subject<String> = new Subject<String>()

  constructor() { }

  selectNavBarMenuItem(item: string): void{
    this.subjectSelectedItem.next(item)
  }
}
