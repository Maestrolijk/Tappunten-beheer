// imported plugins
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

// imported providers
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-editafdeling',
  templateUrl: 'editafdeling.html',
})
export class EditafdelingPage {

  // variables
  naam: string;
  afdelingen: any[];
  index: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastProvider: ToastProvider) {

    // get variables from afdeling page
    this.afdelingen = navParams.get('myAfdelingen');
    this.naam = navParams.get('myAfdelingDataNaam');
    this.index = navParams.get('myAfdelingDataIndex');
  }

  ionViewDidLoad() { }

  // close popover
  close() {
    this.viewCtrl.dismiss();
  }

  // save the changes
  opslaan(item) {
    console.log(this.naam);
    this.viewCtrl.dismiss();
    this.afdelingen.splice(this.index, 1, {
      naam: this.naam
    })
    // show toast message
    this.toastProvider.expandAction(item, 'checked', 'Afdeling is opgeslagen.');
  }

  // delete the afdeling
  verwijderen(item) {
    this.viewCtrl.dismiss();
    this.afdelingen.splice(this.index, 1);
    // show toast message
    this.toastProvider.expandAction(item, 'checked', 'Afdeling is verwijderd.');
  }
}
