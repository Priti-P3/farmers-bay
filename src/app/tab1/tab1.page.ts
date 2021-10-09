import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // categories: any[] = [
  //   {
  //     "categoryName" : "Fertilizers",
  //     "iconPath" : "../../assets/icon/fertilizers-1.png",
  //     "categoryId": 1
  //   },
  //   {
  //     "categoryName" : "Pesticides",
  //     "iconPath" : "../../assets/icon/pesticides-1.png",
  //     "categoryId": 2
  //   },
  //   {
  //     "categoryName" : "Seeds",
  //     "iconPath" : "../../assets/icon/seeds-1.png",
  //     "categoryId": 3
  //   },
    
  // ];

  categories: any;
  constructor(private http: HttpClient) {
    http.get("http://localhost:8080/category").subscribe((data) => {
      this.categories = data;
    });
  }

}
