import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

// imported pages
import { InstellingenPage } from '../instellingen/instellingen';
import { NewtappuntgroepPage } from '../newtappuntgroep/newtappuntgroep';

/**
 * Generated class for the TappuntengroepenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tappuntengroepen',
  templateUrl: 'tappuntengroepen.html',
})
export class TappuntengroepenPage {

  public tappuntengroepen :any = [
    {
      "groepid": 1,
      "naam": "Fysiotherapie"
    },
    {
      "groepid": 2,
      "naam": "Dialyse"
    },
    {
      "groepid": 3,
      "naam": "KNO"
    },
    {
      "groepid": 4,
      "naam": "Geriatrie"
    }]

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TappuntengroepenPage');
  }

  openInstellingenPage() {
    this.navCtrl.push(InstellingenPage)
  }

  newTappuntgroep(myEvent) {

    let popover = this.popoverCtrl.create(NewtappuntgroepPage, {}, { cssClass: 'custom-popover' });
    popover.present({
      ev: myEvent
    });
  }

}
