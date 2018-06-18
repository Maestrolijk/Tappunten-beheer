import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ItemSliding, ToastController } from 'ionic-angular';

/**
 * Generated class for the NewtappuntPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newtappunt',
  templateUrl: 'newtappunt.html',
})
export class NewtappuntPage {

  afdelingen: any;
  afdeling: string;
  ruimtes: any;
  ruimte: string;
  omschrijving; string;
  functie: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private toastCtrl: ToastController) {

    this.afdelingen = [
      { text: 'Fysiotherapie', value: 'Fysiotherapie' },
      { text: 'Dialyse', value: 'Dialyse' },
      { text: 'KNO', value: 'KNO' },
      { text: 'Geriatrie', value: 'Geriatrie' }
    ];

    this.ruimtes = [
      { text: 'A.0.003', value: 'A.0.003' },
      { text: 'A.0.011', value: 'A.0.011' },
      { text: 'A.0.012', value: 'A.0.012' },
      { text: 'A.0.017A', value: 'A.0.017A' },
      { text: 'A.0.017C', value: 'A.0.017C' },
      { text: 'A.0.052', value: 'A.0.052' },
      { text: 'C.0.078', value: 'C.0.078' },
      { text: 'E.0.241', value: 'E.0.241' },
      { text: 'H.0.003B', value: 'H.0.003B' }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewtappuntPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  opslaan(item) {
    console.log(this.afdeling + ", " + this.ruimte + ", " + this.omschrijving + ", " + this.functie);
    this.viewCtrl.dismiss();
    this.expandAction(item, 'checked', 'Tappunt is opgeslagen.');
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
