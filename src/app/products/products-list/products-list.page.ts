import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss'],
})
export class ProductsListPage implements OnInit {

  /*products: any[] = [
    {
      "sku" : "102023232",
      "name" : "Fertilizer 1",
      "weight": 2,
      "unit": "kg"
    },
    {
      "sku" : "102023232",
      "name" : "Fertilizer 2",
      "weight": 2,
      "unit": "kg"
    },
    {
      "sku" : "102023232",
      "name" : "Fertilizer 3",
      "weight": 2,
      "unit": "kg"
    },
    {
      "sku" : "102023232",
      "name" : "Fertilizer 3",
      "weight": 2,
      "unit": "kg"
    },
    {
      "sku" : "102023232",
      "name" : "Fertilizer Gehu",
      "weight": 2,
      "unit": "kg"
    },
    {
      "sku" : "102023232",
      "name" : "Fertilizer Gehu",
      "weight": 2,
      "unit": "kg"
    },
    {
      "sku" : "102023232",
      "name" : "Fertilizer Gehu",
      "weight": 2,
      "unit": "kg"
    },
    {
      "sku" : "102023232",
      "name" : "Fertilizer Gehu",
      "weight": 2,
      "unit": "kg"
    },
    {
      "sku" : "102023232",
      "name" : "Fertilizer Gehu",
      "weight": 2,
      "unit": "kg"
    },
    {
      "sku" : "102023232",
      "name" : "Fertilizer Gehu",
      "weight": 2,
      "unit": "kg"
    }
  ];*/
  products: any;
  categoryId = 1;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.categoryId = +this.route.snapshot.queryParams['categoryId'];
    http.get('http://localhost:8080/products?categoryId=' + this.categoryId).subscribe((products) => {
      this.products = products;
    });
  }

  ngOnInit() {
  }

}
