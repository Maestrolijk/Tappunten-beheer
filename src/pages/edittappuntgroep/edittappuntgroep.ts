//imported plugins
import { Component, ViewChild } from '@angular/core';
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

  // used for autofocus
  @ViewChild('myInput') myInput;

  // variables
  naam: string;
  tappuntgroepen: any[];
  index: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastProvider: ToastProvider,
    public appCtrl: App) {

    // get variables from tappuntgroep page
    this.tappuntgroepen = navParams.get('myTappuntgroepen');
    this.naam = navParams.get('myTappuntgroepDataNaam');
    this.index = navParams.get('myTappuntgroepDataIndex');
  }

  // set autofocus on this field
  ngAfterViewChecked() {
    this.myInput.setFocus();
  }

  // close popover
  close() {
    this.viewCtrl.dismiss();
  }

  // save the changes
  opslaan(item) {
    this.viewCtrl.dismiss();
    this.tappuntgroepen.splice(this.index, 1, {
      naam: this.naam
    })
    // show toast message
    this.toastProvider.expandAction(item, 'checked', 'Tappuntgroep "' + this.naam + '" is opgeslagen.');
  }

  // delete the item
  verwijderen(item) {
    this.viewCtrl.dismiss();
    this.tappuntgroepen.splice(this.index, 1);
    // show toast message
    this.toastProvider.expandAction(item, 'checked', 'Tappuntgroep "' + this.naam + '" is verwijderd.');
  }

  // open the TappuntenKoppelen page while keeping the tabs on the top of the screen
  // this method is needed when wishing to keep tabs while pushing from a popover page
  openTappuntenKoppelen() {
    this.viewCtrl.dismiss();
    this.appCtrl.getActiveNav().push(TappuntenkoppelenPage, { 'myDataTappuntgroep': this.naam });
  }
}
