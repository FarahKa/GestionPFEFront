import { Component, Input, OnInit } from '@angular/core';
import { Soutenance } from '../accordion.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() soutenances: Soutenance[];
  @Input() label : string;
  visibility: boolean;
  activeStatus : string;

  constructor() {}

  ngOnInit(): void {
    this.visibility = false;
    this.activeStatus = "";
  }

  handleToggleVisibility() {
    console.log("she clikk")
    console.log(this.soutenances)
    this.visibility = !this.visibility;
    if(this.visibility){
      this.activeStatus = "active";
    } else {
      this.activeStatus = "";
    }
  }

}
