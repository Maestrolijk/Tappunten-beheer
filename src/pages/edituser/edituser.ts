// imported plugins
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ItemSliding, ToastController } from 'ionic-angular';

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
    private toastCtrl: ToastController) {

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
    this.expandAction(item, 'checked', 'Gebruiker is opgeslagen.');
  }

  // show toast message
  verwijderen(item) {
    this.viewCtrl.dismiss();
    this.expandAction(item, 'checked', 'Gebruiker is verwijderd.');
  }

  // function for creating the toast message
  expandAction(item: ItemSliding, _: any, text: string) {
    setTimeout(() => {
      const toast = this.toastCtrl.create({
        message: text
      });
      toast.present();
      setTimeout(() => toast.dismiss(), 2000);
    }, 500);
  }
}
