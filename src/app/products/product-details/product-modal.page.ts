import { Component, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
    selector: 'product-modal-page',
    templateUrl: './product-modal.page.html',
})
export class ProductModalPage {

    // Data passed in by componentProps
    @Input() quantity: string;
    @Input() address: string;
    @Input() name: string;
    constructor(navParams: NavParams, public modalController: ModalController) {
        // componentProps can also be accessed at construction time using NavParams
        console.log(navParams.get('firstName'));
    }

    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }

}