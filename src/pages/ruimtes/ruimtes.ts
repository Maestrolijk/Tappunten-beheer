import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

// imported pages
import { InstellingenPage } from '../instellingen/instellingen';
import { NewruimtePage } from '../newruimte/newruimte';
import { EditruimtePage } from '../editruimte/editruimte';

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

  errorMessage: string;
  descending: boolean = false;
  order: number;
  column: string = 'ruimte';

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

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RuimtesPage');
  }

  openInstellingenPage() {
    this.navCtrl.push(InstellingenPage)
  }

  newRuimte(myEvent) {

    let popover = this.popoverCtrl.create(NewruimtePage, {}, { cssClass: 'custom-popover' });
    popover.present({
      ev: myEvent
    });
  }

  editRuimte(myEvent) {

    let popover = this.popoverCtrl.create(EditruimtePage, {'myUserDataNaam': myEvent.naam}, { cssClass: 'custom-popover' });
    popover.present({
      ev: myEvent
    });
  }

  sort(sortme: string) {
    this.column = sortme
    console.log('Lets sort column: ', sortme)
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

}
