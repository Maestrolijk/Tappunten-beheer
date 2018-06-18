import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// imported pages
import { InstellingenPage } from '../instellingen/instellingen';

/**
 * Generated class for the TappuntenkoppelenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tappuntenkoppelen',
  templateUrl: 'tappuntenkoppelen.html',
})
export class TappuntenkoppelenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TappuntenkoppelenPage');
  }

  openInstellingenPage() {
    this.navCtrl.push(InstellingenPage)
  }

}
