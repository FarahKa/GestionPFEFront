import { Component, Input, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { NavigationService } from '../navigation/navigation.service';
import { PrettySidebarService } from './pretty-sidebar.service';

@Component({
  selector: 'app-pretty-sidebar',
  templateUrl: './pretty-sidebar.component.html',
  styleUrls: ['./pretty-sidebar.component.css']
})
export class PrettySidebarComponent implements OnInit{
  
  @Input() sidebarMenuItems;

  ngOnInit(): void {
    console.log(this.sidebarMenuItems)
  }
  constructor(private prettySidebarService: PrettySidebarService) { }

  selectSidebarItem(item: string): void {
    this.prettySidebarService.selectSidebarItem(item)
  }

}
