// imported plugins
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

// imported providers
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-newuser',
  templateUrl: 'newuser.html',
})
export class NewuserPage {

  // used for autofocus
  @ViewChild('myInput') myInput;

  // variables
  afdelingen: any;
  adnaam: string;
  naam: string;
  telefoon: number;
  beheerder: boolean;

  user: any[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastProvider: ToastProvider) {

    // get variables from user page
    this.user = navParams.get('myUsers');
  }

  // set autofocus on this field
  ngAfterViewChecked() {
    this.myInput.setFocus();
  }

  // close popover
  close() {
    this.viewCtrl.dismiss();
  }

  // add the user to the JSON object
  opslaan(item) {
    this.user.push({
      gebruikerid: 999,
      AD_naam: this.adnaam,
      naam: this.naam,
      beheerder: this.beheerder,
      telefoon: this.telefoon,
      weken_terug: "0"
    });
    // show toast message
    this.toastProvider.expandAction(item, 'checked', 'Gebruiker is opgeslagen.');
  }
}
