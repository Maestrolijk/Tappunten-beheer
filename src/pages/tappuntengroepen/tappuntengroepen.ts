// imported plugins
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

// imported pages
import { InstellingenPage } from '../instellingen/instellingen';
import { NewtappuntgroepPage } from '../newtappuntgroep/newtappuntgroep';
import { EdittappuntgroepPage } from '../edittappuntgroep/edittappuntgroep';

@IonicPage()
@Component({
  selector: 'page-tappuntengroepen',
  templateUrl: 'tappuntengroepen.html',
})
export class TappuntengroepenPage {

  // variables for sorting
  errorMessage: string;
  descending: boolean = false;
  order: number;
  column: string = 'tappuntgroep';
  naamsort: number = 0;

  // variables for filtering
  columnname: string;
  termsnaam: string;
  terms: string;

  // tappuntengroepen JSON object
  public tappuntengroepen: any = [
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
    this.naamsort = 0;
  }

  // open instellingen page
  openInstellingenPage() {
    this.navCtrl.push(InstellingenPage)
  }

  // open popover page for creating a new tappuntgroep
  newTappuntgroep(myEvent) {
    let popover = this.popoverCtrl.create(NewtappuntgroepPage, { 'myTappuntgroepen': this.tappuntengroepen }, { cssClass: 'custom-popover' });
    popover.present({
      ev: myEvent
    });
  }

  // open popover page for editing a new tappuntgroep
  editTappuntgroep(myEvent, index) {
    let popover = this.popoverCtrl.create(EdittappuntgroepPage, {
      'myTappuntgroepen': this.tappuntengroepen,
      'myTappuntgroepDataNaam': myEvent.naam,
      'myTappuntgroepDataIndex': index
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
