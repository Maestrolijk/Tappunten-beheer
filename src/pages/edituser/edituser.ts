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

  userDataADNaam: any;
  userDataNaam: any;
  userDataAfdeling: any;
  userDataTelefoon: any;
  userDataBeheerder: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private toastCtrl: ToastController,
    params: NavParams) {

    this.userDataADNaam = params.get('myUserDataADNaam')
    this.userDataNaam = params.get('myUserDataNaam');
    this.userDataAfdeling = params.get('myUserDataAfdeling');
    this.userDataTelefoon = params.get('myUserDataTelefoon');
    this.userDataBeheerder = params.get('myUserDataBeheerder');
    this.adnaam = this.userDataADNaam;
    this.naam = this.userDataNaam;
    this.afdeling = this.userDataAfdeling;
    this.telefoon = this.userDataTelefoon;
    this.beheerder = this.userDataBeheerder;

    this.afdelingen = [
      { text: 'Fysiotherapie', value: 'Fysiotherapie' },
      { text: 'Intensive Care', value: 'Intensive Care' },
      { text: 'Dialyse', value: 'Dialyse' },
      { text: 'Neonatologie', value: 'Neonatologie' },
      { text: 'KNO', value: 'KNO' },
      { text: 'ICT', value: 'ICT' },
      { text: 'Spoed Eisende Hulp', value: 'Spoed Eisende Hulp' },
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
