// imported plugins
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

// imported providers
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-edituser',
  templateUrl: 'edituser.html',
})
export class EdituserPage {

  // variables
  afdelingen: any;
  adnaam: string;
  naam: string;
  telefoon: number;
  beheerder: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastProvider: ToastProvider) {

    // get variables from user page
    this.adnaam = navParams.get('myUserDataADNaam');
    this.naam = navParams.get('myUserDataNaam');
    this.telefoon = navParams.get('myUserDataTelefoon');
    this.beheerder = navParams.get('myUserDataBeheerder');
  }

  ionViewDidLoad() { }

  // close popover
  close() {
    this.viewCtrl.dismiss();
  }

  // show toast message
  opslaan(item) {
    console.log(this.adnaam + ", " + this.naam + ", " + this.telefoon + ", " + this.beheerder);
    this.viewCtrl.dismiss();
    this.toastProvider.expandAction(item, 'checked', 'Gebruiker is opgeslagen.');
  }

  // show toast message
  verwijderen(item) {
    this.viewCtrl.dismiss();
    this.toastProvider.expandAction(item, 'checked', 'Gebruiker is verwijderd.');
  }
}
