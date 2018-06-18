import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// imported pages
import { InstellingenPage } from '../instellingen/instellingen';

/**
 * Generated class for the RuimtesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ruimtes',
  templateUrl: 'ruimtes.html',
})
export class RuimtesPage {

  public ruimtes :any = [
    {
      "ruimteid": 1,
      "naam": "A.0.052"
    },
    {
      "ruimteid": 2,
      "naam": "E.0.241"
    },
    {
      "ruimteid": 3,
      "naam": "A.0.012"
    },
    {
      "ruimteid": 4,
      "naam": "A.0.011"
    },
    {
      "ruimteid": 5,
      "naam": "H.0.003B"
    },
    {
      "ruimteid": 6,
      "naam": "C.0.078"
    },
    {
      "ruimteid": 7,
      "naam": "A.0.017A"
    },
    {
      "ruimteid": 8,
      "naam": "A.0.017C"
    },
    {
      "ruimteid": 9,
      "naam": "A.0.023"
    },
    {
      "ruimteid": 10,
      "naam": "A.0.003"
    }]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RuimtesPage');
  }

  openInstellingenPage() {
    this.navCtrl.push(InstellingenPage)
  }

}
