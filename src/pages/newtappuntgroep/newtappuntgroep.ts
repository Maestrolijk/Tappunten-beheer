import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ItemSliding, ToastController } from 'ionic-angular';

/**
 * Generated class for the NewtappuntgroepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newtappuntgroep',
  templateUrl: 'newtappuntgroep.html',
})
export class NewtappuntgroepPage {

  naam: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewtappuntgroepPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  opslaan(item) {
    console.log(this.naam);
    this.viewCtrl.dismiss();
    this.expandAction(item, 'checked', 'Tappuntgroep is opgeslagen.');
  }

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
