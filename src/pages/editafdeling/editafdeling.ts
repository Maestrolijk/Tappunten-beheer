// imported plugins
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

// imported providers
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-editafdeling',
  templateUrl: 'editafdeling.html',
})
export class EditafdelingPage {

  // used for autofocus
  @ViewChild('myInput') myInput;

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
