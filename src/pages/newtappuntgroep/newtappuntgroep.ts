// imported plugins
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ItemSliding, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-newtappuntgroep',
  templateUrl: 'newtappuntgroep.html',
})
export class NewtappuntgroepPage {

  // variables
  naam: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() { }

  // close popover
  close() {
    this.viewCtrl.dismiss();
  }

  // show toast message
  opslaan(item) {
    console.log(this.naam);
    this.viewCtrl.dismiss();
    this.expandAction(item, 'checked', 'Tappuntgroep is opgeslagen.');
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
