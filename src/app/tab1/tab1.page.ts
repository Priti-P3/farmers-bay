import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  categories: any[] = [
    {
      "name" : "Fertilizers",
      "icon" : "../../assets/icon/fertilizers-1.png"
    },
    // {
    //   "name" : "Pesticides",
    //   "icon" : "../../assets/icon/pesticides-1.png"
    // },
    // {
    //   "name" : "Seeds",
    //   "icon" : "../../assets/icon/seeds-1.png"
    // },
    
  ];
  constructor() {}

}
