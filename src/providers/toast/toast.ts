// imported plugins
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemSliding, ToastController } from 'ionic-angular';

@Injectable()
export class ToastProvider {

  constructor(public http: HttpClient,
    private toastCtrl: ToastController) {
  }

  // function for creating the toast message
  expandAction(item: ItemSliding, _: any, text: string) {
    setTimeout(() => {
      const toast = this.toastCtrl.create({
        message: text
      });
      toast.present();
      setTimeout(() => toast.dismiss(), 2000);
    }, 500);
  }
}
