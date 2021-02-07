import { Component, Input, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { EventEmitter } from 'events';
import { Subject } from 'rxjs';
import { SearchbarService } from './searchbar.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  searchIcon;
  isEnabled;
  @Input() search_fields


  constructor(private searchbarService: SearchbarService) { }

  ngOnInit(): void {
    this.searchIcon = faSearch
    this.isEnabled = false
  }

  search(){
    if(!this.isEnabled)
      this.search_fields=this.search_fields.filter((s) => {
        if(s.type == "number")
          return false
        return true
      })
    this.searchbarService.subjectSearchFields.next(this.search_fields)
  }
}
