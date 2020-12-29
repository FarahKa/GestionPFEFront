import { Component, Input, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'app-pretty-sidebar',
  templateUrl: './pretty-sidebar.component.html',
  styleUrls: ['./pretty-sidebar.component.css']
})
export class PrettySidebarComponent {

  @Input() sidebarMenuItems;

}
