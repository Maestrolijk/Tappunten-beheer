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
  selector: 'page-newtappunt',
  templateUrl: 'newtappunt.html',
})
export class NewtappuntPage {

  // variables
  omschrijving; string;
  functie: string;

  afdelingen: afdeling[];
  afdeling: afdeling;
  ruimtes: ruimte[];
  ruimte: ruimte;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastProvider: ToastProvider) {

    // afdelingen JSON object
    this.afdelingen = [
      { id: 1, name: 'Fysiotherapie' },
      { id: 2, name: 'Dialyse' },
      { id: 3, name: 'KNO' },
      { id: 4, name: 'Geriatrie' }
    ];

    // ruimtes JSON object
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

  ionViewDidLoad() { }

  // close popover
  close() {
    this.viewCtrl.dismiss();
  }

  // show toast message
  opslaan(item) {
    console.log(this.afdeling + ", " + this.ruimte + ", " + this.omschrijving + ", " + this.functie);
    this.viewCtrl.dismiss();
    this.toastProvider.expandAction(item, 'checked', 'Tappunt is opgeslagen.');
  }
}
