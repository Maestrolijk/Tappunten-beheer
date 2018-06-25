// imported plugins
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

// imported providers
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-newafdeling',
  templateUrl: 'newafdeling.html',
})
export class NewafdelingPage {

  // variables
  naam: string;
  afdeling: any[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastProvider: ToastProvider) {

    // get variables from user page
    this.afdeling = navParams.get('myAfdelingen');
  }

  ionViewDidLoad() { }

  // close popover
  close() {
    this.viewCtrl.dismiss();
  }

  // add the afdeling to the JSON object
  opslaan(item) {
    this.viewCtrl.dismiss();
    this.afdeling.push({
      afdelingsid: 999,
      naam: this.naam
    });

    // show toast message
    this.toastProvider.expandAction(item, 'checked', 'Afdeling is opgeslagen.');
  }
}
