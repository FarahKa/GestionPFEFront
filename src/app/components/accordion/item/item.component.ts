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
    console.log("she clikk")
    console.log(this.visibility)
    // console.log(this.activeStatus)
    this.visibility = !this.visibility;
    // if(this.visibility){
    //   this.activeStatus = "active";
    // } else {
    //   this.activeStatus = "";
    // }
    // console.log(this.visibility)
    // console.log(this.activeStatus)
  }

}
