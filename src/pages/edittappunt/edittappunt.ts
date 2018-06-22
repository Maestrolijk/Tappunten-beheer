import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ItemSliding, ToastController } from 'ionic-angular';

/**
 * Generated class for the EdittappuntPage page.
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
  selector: 'page-edittappunt',
  templateUrl: 'edittappunt.html',
})
export class EdittappuntPage {

  omschrijving: string;
  functie: string;

  tempafdeling: string;
  afdelingnummer: number;
  afdelingfiltered: any;

  tempruimte: string;
  ruimtenummer: number;
  ruimtesfiltered: any;

  afdelingen: afdeling[];
  afdeling: afdeling;
  ruimtes: ruimte[];
  ruimte: ruimte;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private toastCtrl: ToastController) {

    this.afdelingen = [
      { id: 0, name: '' },
      { id: 1, name: 'Fysiotherapie' },
      { id: 2, name: 'Dialyse' },
      { id: 3, name: 'KNO' },
      { id: 4, name: 'Geriatrie' }
    ];

    this.ruimtes = [
      { id: 0, name: '' },
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

    // get the right afdeling from the list
    this.afdelingfiltered = this.afdelingen;
    this.tempafdeling = navParams.get('myUserDataAfdeling');
    this.afdelingfiltered = this.afdelingen.filter(i => i.name == this.tempafdeling);
    for (let key of this.afdelingfiltered) {
      this.afdelingnummer = key.id;
    }
    this.afdeling = this.afdelingen[this.afdelingnummer];

    // get the right ruimte from the list
    this.ruimtesfiltered = this.ruimtes;
    this.tempruimte = navParams.get('myUserDataRuimte');
    this.ruimtesfiltered = this.ruimtes.filter(i => i.name == this.tempruimte);
    for (let key of this.ruimtesfiltered) {
      this.ruimtenummer = key.id;
    }
    this.ruimte = this.ruimtes[this.ruimtenummer];

    this.omschrijving = navParams.get('myUserDataOmschrijving');
    this.functie = navParams.get('myUserDataFunctie');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdittappuntPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  opslaan(item) {
    this.viewCtrl.dismiss();
    this.expandAction(item, 'checked', 'Tappunt is opgeslagen.');
  }

  verwijderen(item) {
    this.viewCtrl.dismiss();
    this.expandAction(item, 'checked', 'Tappunt is verwijderd.');
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
