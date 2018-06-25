// imported plugins
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

// imported providers
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-newtappuntgroep',
  templateUrl: 'newtappuntgroep.html',
})
export class NewtappuntgroepPage {

  // used for autofocus
  @ViewChild('myInput') myInput;

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

  // set autofocus on this field
  ngAfterViewChecked() {
    this.myInput.setFocus();
  }

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
