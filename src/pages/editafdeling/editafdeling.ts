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

  // show toast message
  opslaan(item) {
    console.log(this.naam);
    this.viewCtrl.dismiss();
    this.afdelingen.splice(this.index, 1, {
      naam: this.naam
    })
    this.toastProvider.expandAction(item, 'checked', 'Afdeling is opgeslagen.');
  }

  // show toast message
  verwijderen(item) {
    this.viewCtrl.dismiss();
    this.afdelingen.splice(this.index, 1);
    this.toastProvider.expandAction(item, 'checked', 'Afdeling is verwijderd.');
  }
}
