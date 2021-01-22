import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrettySidebarService {

  subjectSelectedItem : Subject<String> = new Subject<String>()

  constructor() { }

  selectSidebarItem(item: string): void{
    if(item["children"]){
      return
    }
    this.subjectSelectedItem.next(item)
  }
}
