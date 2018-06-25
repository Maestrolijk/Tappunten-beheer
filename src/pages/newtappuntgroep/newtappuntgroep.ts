// imported plugins
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

// imported providers
import { ToastProvider } from '../../providers/toast/toast';

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
    public toastProvider: ToastProvider) {
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
    this.toastProvider.expandAction(item, 'checked', 'Tappuntgroep is opgeslagen.');
  }
}
