// imported plugins
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

// imported providers
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-edituser',
  templateUrl: 'edituser.html',
})
export class EdituserPage {

  // used for autofocus
  @ViewChild('myInput') myInput;

  // variables
  afdelingen: any;
  adnaam: string;
  naam: string;
  telefoon: number;
  beheerder: boolean;

  users: any[];
  index: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastProvider: ToastProvider) {

    // get variables from user page
    this.users = navParams.get('myUsers');
    this.adnaam = navParams.get('myUserDataADNaam');
    this.naam = navParams.get('myUserDataNaam');
    this.telefoon = navParams.get('myUserDataTelefoon');
    this.beheerder = navParams.get('myUserDataBeheerder');
    this.index = navParams.get('myUserDataIndex');
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
    this.users.splice(this.index, 1, {
      AD_naam: this.adnaam,
      naam: this.naam,
      beheerder: this.beheerder,
      telefoon: this.telefoon
    })
    // show toast message
    this.toastProvider.expandAction(item, 'checked', 'Gebruiker is opgeslagen.');
  }

  // delete the item
  verwijderen(item) {
    this.viewCtrl.dismiss();
    this.users.splice(this.index, 1);
    // show toast message
    this.toastProvider.expandAction(item, 'checked', 'Gebruiker is verwijderd.');
  }
}
