// imported plugins
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

// imported providers
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-newruimte',
  templateUrl: 'newruimte.html',
})
export class NewruimtePage {

  // used for autofocus
  @ViewChild('myInput') myInput;

  // variables
  naam: string;
  ruimte: any[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastProvider: ToastProvider) {

    // get variables from user page
    this.ruimte = navParams.get('myRuimtes');
  }

  // set autofocus on this field
  ngAfterViewChecked() {
    this.myInput.setFocus();
  }

  // close popover
  close() {
    this.viewCtrl.dismiss();
  }

  // add the ruimte to the JSON object
  opslaan(item) {
    this.viewCtrl.dismiss();
    this.ruimte.push({
      ruimteid: 999,
      naam: this.naam
    });
    // show toast message
    this.toastProvider.expandAction(item, 'checked', 'Ruimte is opgeslagen.');
  }
}
