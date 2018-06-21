import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ItemSliding, ToastController } from 'ionic-angular';

/**
 * Generated class for the NewtappuntPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

class afdeling {
  public id: number;
  public name: string;
}

class ruimte {
  public id: number;
  public name: string;
}

@IonicPage()
@Component({
  selector: 'page-newtappunt',
  templateUrl: 'newtappunt.html',
})
export class NewtappuntPage {

  omschrijving; string;
  functie: string;

  afdelingen: afdeling[];
  afdeling: afdeling;
  ruimtes: ruimte[];
  ruimte: ruimte;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private toastCtrl: ToastController) {

    this.afdelingen = [
      { id: 1, name: 'Fysiotherapie' },
      { id: 2, name: 'Dialyse' },
      { id: 3, name: 'KNO' },
      { id: 4, name: 'Geriatrie' }
    ];

    this.ruimtes = [
      { id: 1, name: 'A.0.003' },
      { id: 2, name: 'A.0.011' },
      { id: 3, name: 'A.0.012' },
      { id: 4, name: 'A.0.017A' },
      { id: 5, name: 'A.0.017C' },
      { id: 6, name: 'A.0.052' },
      { id: 7, name: 'C.0.078' },
      { id: 8, name: 'E.0.241' },
      { id: 9, name: 'H.0.003B' }
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
