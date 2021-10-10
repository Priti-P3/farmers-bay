import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProductModalPage } from './product-modal.page';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  productId: number;
  product: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, public modalController: ModalController) {
    this.productId = this.route.snapshot.queryParams['productId'];
    this.http.get('http://localhost:8080/products/' + this.productId).subscribe((product) => {
      this.product = product;
    });
  }

  ngOnInit() {
  }

  createOrder() {
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ProductModalPage,
      componentProps: {
        'quantity': 1,
        'address': 'Address 1',
        'name': 'Priti Pipada'
      }
    });
    return await modal.present();
  }

}
