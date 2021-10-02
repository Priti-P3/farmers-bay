import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fertilizers',
  templateUrl: './fertilizers.page.html',
  styleUrls: ['./fertilizers.page.scss'],
})
export class FertilizersPage implements OnInit {

  fertilizers: any[] = [
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
  ];

  constructor() { }

  ngOnInit() {
  }

}
