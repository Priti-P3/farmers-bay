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
    },
    {
      "name" : "Pesticides",
    },
    {
      "name" : "Seeds",
    },
    
  ];
  constructor() {}

}
