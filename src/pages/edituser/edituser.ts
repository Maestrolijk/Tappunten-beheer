import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ItemSliding, ToastController } from 'ionic-angular';

/**
 * Generated class for the EdituserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edituser',
  templateUrl: 'edituser.html',
})
export class EdituserPage {

  afdelingen: any;
  adnaam: string;
  naam: string;
  afdeling: any;
  telefoon: number;
  beheerder: boolean;

  userDataNaam: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private toastCtrl: ToastController,
    params: NavParams) {

    this.userDataNaam = params.get('myUserDataNaam');
    this.adnaam = this.userDataNaam;

    this.afdelingen = [
      { text: 'Fysiotherapie', value: 'Fysiotherapie' },
      { text: 'Dialyse', value: 'Dialyse' },
      { text: 'KNO', value: 'KNO' },
      { text: 'Geriatrie', value: 'Geriatrie' }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdituserPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  opslaan(item) {
    console.log(this.adnaam + ", " + this.naam + ", " + this.afdeling + ", " + this.telefoon + ", " + this.beheerder);
    this.viewCtrl.dismiss();
    this.expandAction(item, 'checked', 'Gebruiker is opgeslagen.');
  }

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
