// imported plugins
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

// imported pages
import { InstellingenPage } from '../instellingen/instellingen';
import { NewtappuntPage } from '../newtappunt/newtappunt';
import { EdittappuntPage } from '../edittappunt/edittappunt';


@IonicPage()
@Component({
  selector: 'page-tappunten',
  templateUrl: 'tappunten.html',
})
export class TappuntenPage {

  // variables for sorting
  errorMessage: string;
  descending: boolean = false;
  order: number;
  column: string = 'afdeling';

  // variables for filtering
  columnname: string;
  termsafdeling: string;
  termsruimte: string;
  termsomschrijving: string;
  termsfunctie: string;
  terms: string;

  // tappunten JSON object
  public tappunten: any = [
    {
      "tappuntId": 1,
      "ruimte": "A.0.052",
      "functie": "Onderzoekkamer",
      "omschrijving": "Wastafel-mengkraan",
      "opmerkingen": "Afgesloten boven het plafond",
      "gebruikersid": 19,
      "verlopen": "FALSE",
      "afdeling": "Fysiotherapie",
      "kamernr": "",
      "afbeelding": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcU\nFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgo\nKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCAIWAe4DASIA\nAhEBAxEB/8QAHAABAAIDAQEB"
    },
    {
      "tappuntId": 2,
      "ruimte": "E.0.241",
      "functie": "Onderzoekkamer",
      "omschrijving": "Aanrechtcombinatie-mengkraan",
      "opmerkingen": "",
      "gebruikersid": 51,
      "verlopen": "FALSE",
      "afdeling": "Radiologie",
      "kamernr": "",
      "afbeelding": "",
    },
    {
      "tappuntId": 3,
      "ruimte": "A.0.012",
      "functie": "Spr.onderzoekkamer",
      "omschrijving": "Aanrechtcombinatie-Mengkraan",
      "opmerkingen": "",
      "gebruikersid": 63,
      "verlopen": "FALSE",
      "afdeling": "Dialyse",
      "kamernr": "",
      "afbeelding": "",
    },
    {
      "tappuntId": 4,
      "ruimte": "A.0.002",
      "functie": "Magazijn",
      "omschrijving": "Wastafel-mengkraan",
      "opmerkingen": "",
      "gebruikersid": 63,
      "verlopen": "FALSE",
      "afdeling": "Dialyse",
      "kamernr": "",
      "afbeelding": "",
    },
    {
      "tappuntId": 5,
      "ruimte": "A.0.011",
      "functie": "Spr.onderzoekkamer",
      "omschrijving": "Aanrechtcombinatie-mengkraan",
      "opmerkingen": "",
      "gebruikersid": 63,
      "verlopen": "FALSE",
      "afdeling": "Dialyse",
      "kamernr": "",
      "afbeelding": "",
    },
    {
      "tappuntId": 6,
      "ruimte": "H.0.003B",
      "functie": "Behandelkamer",
      "omschrijving": "Wastafel-mengkraan",
      "opmerkingen": "",
      "gebruikersid": 19,
      "verlopen": "FALSE",
      "afdeling": "Fysiotherapie",
      "kamernr": "",
      "afbeelding": "",
    },
    {
      "tappuntId": 8,
      "ruimte": "C.0.078",
      "functie": "Spr.onderzoekkamer",
      "omschrijving": "Wastafel-mengkraan",
      "opmerkingen": "",
      "gebruikersid": 245,
      "verlopen": "FALSE",
      "afdeling": "KNO.",
      "kamernr": "",
      "afbeelding": "",
    },
    {
      "tappuntId": 1314,
      "ruimte": "D.1.224",
      "functie": "Berging verpleegk.magazijn",
      "omschrijving": "Aanrechtcombinatie-mengkraan",
      "opmerkingen": "",
      "gebruikersid": 36,
      "verlopen": "FALSE",
      "afdeling": "IC.",
      "kamernr": "",
      "afbeelding": "",
    },
    {
      "tappuntId": 1315,
      "ruimte": "D.1.225",
      "functie": "Spoelruimte/vuil/vuil linnen",
      "omschrijving": "Aanrechtcombinatie-mengkraan",
      "opmerkingen": "",
      "gebruikersid": 36,
      "verlopen": "FALSE",
      "afdeling": "IC.",
      "kamernr": "",
      "afbeelding": "",
    },
    {
      "tappuntId": 1316,
      "ruimte": "D.1.225",
      "functie": "Spoelruimte/vuil/vuil linnen",
      "omschrijving": "Desinfectie machine",
      "opmerkingen": "",
      "gebruikersid": 36,
      "verlopen": "FALSE",
      "afdeling": "IC.",
      "kamernr": "",
      "afbeelding": "",
    },
    {
      "tappuntId": 1317,
      "ruimte": "D.1.226",
      "functie": "Trafokast C-3",
      "omschrijving": "Techniekruimte",
      "opmerkingen": "",
      "gebruikersid": "",
      "verlopen": "FALSE",
      "afdeling": "",
      "kamernr": "",
      "afbeelding": "",
    },
    {
      "tappuntId": 1318,
      "ruimte": "D.1.227",
      "functie": "Schone werkruimte",
      "omschrijving": "Aanrechtcombinatie-mengkraan",
      "opmerkingen": "",
      "gebruikersid": 36,
      "verlopen": "FALSE",
      "afdeling": "IC.",
      "kamernr": "",
      "afbeelding": "",
    }
  ]

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() { }

  // open instellingen page
  openInstellingenPage() {
    this.navCtrl.push(InstellingenPage)
  }

  // open popover page for creating a new tappunt
  newTappunt(myEvent) {
    let popover = this.popoverCtrl.create(NewtappuntPage, { 'myTappunten': this.tappunten }, { cssClass: 'custom-popover' });
    popover.present({
      ev: myEvent
    });
  }

  // open popover page for editing a tappunt
  editTappunt(myEvent, index) {
    let popover = this.popoverCtrl.create(EdittappuntPage, {
      'myTappunten': this.tappunten,
      'myTappuntDataAfdeling': myEvent.afdeling,
      'myTappuntDataRuimte': myEvent.ruimte,
      'myTappuntDataOmschrijving': myEvent.omschrijving,
      'myTappuntDataFunctie': myEvent.functie,
      'myTappuntDataIndex': index
    }, { cssClass: 'custom-popover' });
    popover.present({
      ev: myEvent
    });
  }

  // sorting of columns
  // SOURCE: https://www.djamware.com/post/5a37ceaf80aca7059c142970/ionic-3-and-angular-5-search-and-sort-list-of-data
  // And sorting a second column requires 2 clicks...
  sort(sortme: string) {
    this.column = sortme
    console.log('Lets sort column: ', sortme)
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  // function to determine on which column is being filtered
  setFilter(value) {
    this.columnname = value;
    if (value === 'afdeling') {
      this.terms = this.termsafdeling;
    }
    if (value === 'ruimte') {
      this.terms = this.termsruimte;
    }
    if (value === 'omschrijving') {
      this.terms = this.termsomschrijving;
    }
    if (value === 'functie') {
      this.terms = this.termsfunctie;
    }
  }
}
