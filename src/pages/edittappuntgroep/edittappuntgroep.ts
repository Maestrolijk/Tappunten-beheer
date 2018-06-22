import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ItemSliding, ToastController, App } from 'ionic-angular';

// imported pages
import { TappuntenkoppelenPage } from '../tappuntenkoppelen/tappuntenkoppelen';

/**
 * Generated class for the EdittappuntgroepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edittappuntgroep',
  templateUrl: 'edittappuntgroep.html',
})
export class EdittappuntgroepPage {

  naam: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private toastCtrl: ToastController,
    public appCtrl: App,
    params: NavParams) {

    this.naam = params.get('myUserDataNaam');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdittappuntgroepPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  opslaan(item) {
    console.log(this.naam);
    this.viewCtrl.dismiss();
    this.expandAction(item, 'checked', 'Tappuntgroep is opgeslagen.');
  }

  verwijderen(item) {
    this.viewCtrl.dismiss();
    this.expandAction(item, 'checked', 'Tappuntgroep is verwijderd.');
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

  openTappuntenKoppelen() {
    this.viewCtrl.dismiss();
    this.appCtrl.getActiveNav().push(TappuntenkoppelenPage,  {'myDataTappuntgroep': this.naam});
  }

}
