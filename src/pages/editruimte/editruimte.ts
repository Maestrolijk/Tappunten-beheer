// imported plugins
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

// imported providers
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-editruimte',
  templateUrl: 'editruimte.html',
})
export class EditruimtePage {

  // used for autofocus
  @ViewChild('myInput') myInput;

  // variables
  naam: string;
  ruimtes: any[];
  index: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastProvider: ToastProvider) {

    // get variables from ruimte page
    this.ruimtes = navParams.get('myRuimtes');
    this.naam = navParams.get('myRuimteDataNaam');
    this.index = navParams.get('myRuimteDataIndex');
  }

  // set autofocus on this field
  ngAfterViewChecked() {
    this.myInput.setFocus();
  }

  // close popover
  close() {
    this.viewCtrl.dismiss();
  }

  // save the changes
  opslaan(item) {
    this.viewCtrl.dismiss();
    this.ruimtes.splice(this.index, 1, {
      naam: this.naam
    });
    // show toast message
    this.toastProvider.expandAction(item, 'checked', 'Ruimte "' + this.naam + '" is opgeslagen.');
  }

  // delete the item
  verwijderen(item) {
    this.viewCtrl.dismiss();
    this.ruimtes.splice(this.index, 1);
    // show toast message
    this.toastProvider.expandAction(item, 'checked', 'Ruimte "' + this.naam + '" is verwijderd.');
  }
}
