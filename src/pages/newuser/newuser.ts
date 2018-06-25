// imported plugins
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ItemSliding, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-newuser',
  templateUrl: 'newuser.html',
})
export class NewuserPage {

  // variables
  afdelingen: any;
  adnaam: string;
  naam: string;
  telefoon: number;
  beheerder: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private toastCtrl: ToastController) {
  }

  // close popover
  close() {
    this.viewCtrl.dismiss();
  }

  // show toast message
  opslaan(item) {
    console.log(this.adnaam + ", " + this.naam + ", " + this.telefoon + ", " + this.beheerder);
    this.viewCtrl.dismiss();
    this.expandAction(item, 'checked', 'Gebruiker is opgeslagen.');
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
