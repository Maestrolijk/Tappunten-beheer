// imported plugins
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

// imported pages
import { InstellingenPage } from '../instellingen/instellingen';
import { NewafdelingPage } from '../newafdeling/newafdeling';
import { EditafdelingPage } from '../editafdeling/editafdeling';

@IonicPage()
@Component({
  selector: 'page-afdelingen',
  templateUrl: 'afdelingen.html',
})
export class AfdelingenPage {

  // variables for sorting
  errorMessage: string;
  descending: boolean = false;
  order: number;
  column: string = 'naam';

  // variables for filtering
  columnname: string;
  termsnaam: string;
  terms: string;

  // afdelingen JSON object
  public afdelingen: any = [
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

  ionViewDidLoad() { }

  // open instellingen page
  openInstellingenPage() {
    this.navCtrl.push(InstellingenPage)
  }

  // open popover page for creating a new afdeling
  newAfdeling(myEvent) {
    let popover = this.popoverCtrl.create(NewafdelingPage, { 'myAfdelingen': this.afdelingen }, { cssClass: 'custom-popover' });
    popover.present({
      ev: myEvent
    });
  }

  // open popover page for editing an afdeling
  editAfdeling(myEvent, index) {
    let popover = this.popoverCtrl.create(EditafdelingPage, {
      'myAfdelingen': this.afdelingen,
      'myAfdelingDataNaam': myEvent.naam,
      'myAfdelingDataIndex': index
    }, { cssClass: 'custom-popover' });
    popover.present({
      ev: myEvent
    });
  }

  // sorting of columns
  sort(sortme: string) {
    this.column = sortme
    console.log('Lets sort column: ', sortme)
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  // function to determine on which column is being filtered
  setFilter(value) {
    this.columnname = value;
    if (value === 'naam') {
      this.terms = this.termsnaam;
    }
  }
}
