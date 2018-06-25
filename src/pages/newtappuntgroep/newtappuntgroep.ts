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

  tappuntgroep: any[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastProvider: ToastProvider) {

    // get variables from user page
    this.tappuntgroep = navParams.get('myTappuntgroepen');
  }

  ionViewDidLoad() { }

  // close popover
  close() {
    this.viewCtrl.dismiss();
  }

  // add the tappuntgroep to the JSON object
  opslaan(item) {
    this.viewCtrl.dismiss();
    this.tappuntgroep.push({
      groepid: 999,
      naam: this.naam
    });

    // show toast message
    this.toastProvider.expandAction(item, 'checked', 'Tappuntgroep is opgeslagen.');
  }
}
