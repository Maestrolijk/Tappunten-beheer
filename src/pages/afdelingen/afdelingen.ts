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
  naamsort: number = 0;

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

  ionViewDidLoad() {
    this.naamsort = 0;
  }

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
    switch (sortme) {
      case "naam": {
        if (this.naamsort === 0) {
          this.naamsort = 1;
        }
        else {
          this.naamsort = 0;
        }
        break;
      }
    }
    this.column = sortme
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  // function to determine on which column is being filtered
  setFilter(value) {
    this.columnname = value;
    switch (value) {
      case "naam": {
        this.terms = this.termsnaam;
        break;
      }
    }
  }
}
