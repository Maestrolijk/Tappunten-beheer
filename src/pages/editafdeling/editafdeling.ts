import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ItemSliding, ToastController } from 'ionic-angular';

/**
 * Generated class for the EditafdelingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editafdeling',
  templateUrl: 'editafdeling.html',
})
export class EditafdelingPage {

  naam: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private toastCtrl: ToastController) {

      this.naam = navParams.get('myUserDataNaam');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditafdelingPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  opslaan(item) {
    console.log(this.naam);
    this.viewCtrl.dismiss();
    this.expandAction(item, 'checked', 'Afdeling is opgeslagen.');
  }

  verwijderen(item) {
    this.viewCtrl.dismiss();
    this.expandAction(item, 'checked', 'Afdeling is verwijderd.');
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