import { Component, Input, OnInit } from '@angular/core';
import { Soutenance } from 'src/app/models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  // @Input() soutenances: Soutenance[];
  @Input() label : string;
  visibility: boolean;
  activeStatus : string;

  constructor() {}

  ngOnInit(): void {
    this.visibility = false;
    this.activeStatus = "active";
  }

  handleToggleVisibility() {
    this.visibility = !this.visibility;
  }

}
