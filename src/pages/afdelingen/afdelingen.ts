import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

// imported pages
import { InstellingenPage } from '../instellingen/instellingen';
import { NewafdelingPage } from '../newafdeling/newafdeling';
import { EditafdelingPage } from '../editafdeling/editafdeling';

/**
 * Generated class for the AfdelingenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-afdelingen',
  templateUrl: 'afdelingen.html',
})
export class AfdelingenPage {

  errorMessage: string;
  descending: boolean = false;
  order: number;
  column: string = 'naam';

  public afdelingen :any = [
    {
      "afdelingsid": 1,
      "naam": "Fysiotherapie"
    },
    {
      "afdelingsid": 2,
      "naam": "Dialyse"
    },
    {
      "afdelingsid": 3,
      "naam": "KNO"
    },
    {
      "afdelingsid": 4,
      "naam": "Geriatrie"
    }]

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AfdelingenPage');
  }

  openInstellingenPage() {
    this.navCtrl.push(InstellingenPage)
  }

  newAfdeling(myEvent) {

    let popover = this.popoverCtrl.create(NewafdelingPage, {}, { cssClass: 'custom-popover' });
    popover.present({
      ev: myEvent
    });
  }

  editAfdeling(myEvent) {

    let popover = this.popoverCtrl.create(EditafdelingPage, {'myUserDataNaam': myEvent.naam}, { cssClass: 'custom-popover' });
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
