// imported plugins
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

// imported providers
import { ToastProvider } from '../../providers/toast/toast';

// class for afdeling search
class afdeling {
  public id: number;
  public name: string;
}

// class for ruimte search
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

  // variables
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

  tappunten: any[];
  index: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastProvider: ToastProvider) {

    // afdelingen JSON object
    this.afdelingen = [
      { id: 0, name: '' },
      { id: 1, name: 'Fysiotherapie' },
      { id: 2, name: 'Dialyse' },
      { id: 3, name: 'KNO' },
      { id: 4, name: 'Geriatrie' }
    ];

    // ruimtes JSON object
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
    this.tempafdeling = navParams.get('myTappuntDataAfdeling');
    this.afdelingfiltered = this.afdelingen.filter(i => i.name == this.tempafdeling);
    for (let key of this.afdelingfiltered) {
      this.afdelingnummer = key.id;
    }
    this.afdeling = this.afdelingen[this.afdelingnummer];

    // get the right ruimte from the list
    this.ruimtesfiltered = this.ruimtes;
    this.tempruimte = navParams.get('myTappuntDataRuimte');
    this.ruimtesfiltered = this.ruimtes.filter(i => i.name == this.tempruimte);
    for (let key of this.ruimtesfiltered) {
      this.ruimtenummer = key.id;
    }
    this.ruimte = this.ruimtes[this.ruimtenummer];

    // get variables from tappunt page
    this.tappunten = navParams.get('myTappunten');
    this.omschrijving = navParams.get('myTappuntDataOmschrijving');
    this.functie = navParams.get('myTappuntDataFunctie');
    this.index = navParams.get('myTappuntDataIndex');
  }

  ionViewDidLoad() { }

  // close popover
  close() {
    this.viewCtrl.dismiss();
  }

  // show toast message
  opslaan(item) {
    this.viewCtrl.dismiss();
    this.tappunten.splice(this.index, 1, {
      ruimte: this.ruimte.name,
      functie: this.functie,
      omschrijving: this.omschrijving,
      afdeling: this.afdeling.name
    })
    this.toastProvider.expandAction(item, 'checked', 'Tappunt is opgeslagen.');
  }

  // show toast message
  verwijderen(item) {
    this.viewCtrl.dismiss();
    this.tappunten.splice(this.index, 1);
    this.toastProvider.expandAction(item, 'checked', 'Tappunt is verwijderd.');
  }
}
