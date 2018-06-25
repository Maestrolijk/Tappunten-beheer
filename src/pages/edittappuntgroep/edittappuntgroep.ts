//imported plugins
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';

// imported pages
import { TappuntenkoppelenPage } from '../tappuntenkoppelen/tappuntenkoppelen';

// imported providers
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-edittappuntgroep',
  templateUrl: 'edittappuntgroep.html',
})
export class EdittappuntgroepPage {

  // variables
  naam: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastProvider: ToastProvider,
    public appCtrl: App) {

    // get variables from tappuntgroep page
    this.naam = navParams.get('myUserDataNaam');
  }

  ionViewDidLoad() { }

  // close popover
  close() {
    this.viewCtrl.dismiss();
  }

  // show toast message
  opslaan(item) {
    console.log(this.naam);
    this.viewCtrl.dismiss();
    this.toastProvider.expandAction(item, 'checked', 'Tappuntgroep is opgeslagen.');
  }

  // show toast message
  verwijderen(item) {
    this.viewCtrl.dismiss();
    this.toastProvider.expandAction(item, 'checked', 'Tappuntgroep is verwijderd.');
  }

  // open the TappuntenKoppelen page while keeping the tabs on the top of the screen
  // this method is needed when wishing to keep tabs while pushing from a popover page
  openTappuntenKoppelen() {
    this.viewCtrl.dismiss();
    this.appCtrl.getActiveNav().push(TappuntenkoppelenPage, { 'myDataTappuntgroep': this.naam });
  }
}
