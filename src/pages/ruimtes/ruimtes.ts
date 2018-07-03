// imported plugins
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

// imported pages
import { InstellingenPage } from '../instellingen/instellingen';
import { NewruimtePage } from '../newruimte/newruimte';
import { EditruimtePage } from '../editruimte/editruimte';

@IonicPage()
@Component({
  selector: 'page-ruimtes',
  templateUrl: 'ruimtes.html',
})
export class RuimtesPage {

  // variables for sorting
  errorMessage: string;
  descending: boolean = false;
  order: number;
  column: string = 'ruimte';
  naamsort: number = 0;

  // variables for filtering
  columnname: string;
  termsnaam: string;
  terms: string;

  // ruimtes JSON object
  public ruimtes: any = [
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
    this.naamsort = 0;
  }

  // open instellingen page
  openInstellingenPage() {
    this.navCtrl.push(InstellingenPage)
  }

  // open popover page for creating a new ruimte
  newRuimte(myEvent) {
    let popover = this.popoverCtrl.create(NewruimtePage, { 'myRuimtes': this.ruimtes }, { cssClass: 'custom-popover' });
    popover.present({
      ev: myEvent
    });
  }

  // open popover page for editing a ruimte
  editRuimte(myEvent, index) {
    let popover = this.popoverCtrl.create(EditruimtePage, {
      'myRuimtes': this.ruimtes,
      'myRuimteDataNaam': myEvent.naam,
      'myRuimteDataIndex': index
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
