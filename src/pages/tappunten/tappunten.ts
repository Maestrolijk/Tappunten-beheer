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

  countries: string[];
  errorMessage: string;
  descending: boolean = false;
  order: number;
  column: string = 'afdeling';

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
      "functie": "behandelkamer",
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
      "functie": "berging verpleegk.magazijn",
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
      "functie": "trafokast C-3",
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad TappuntenPage');

  }

  openInstellingenPage() {
    this.navCtrl.push(InstellingenPage)
  }

  newTappunt(myEvent) {

    let popover = this.popoverCtrl.create(NewtappuntPage, {}, { cssClass: 'custom-popover' });
    popover.present({
      ev: myEvent
    });
  }

  // SOURCE: https://www.djamware.com/post/5a37ceaf80aca7059c142970/ionic-3-and-angular-5-search-and-sort-list-of-data
  // Sorting on 'Functie' needs some fixing...
  // And sorting a second column requires 2 clicks...
  sort(sortme: string) {
    this.column = sortme
    console.log('Lets sort column: ', sortme)
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  editTappunt(myEvent) {

    let popover = this.popoverCtrl.create(EdittappuntPage, {
      'myUserDataAfdeling': myEvent.afdeling,
      'myUserDataRuimte': myEvent.ruimte,
      'myUserDataOmschrijving': myEvent.omschrijving,
      'myUserDataFunctie': myEvent.functie
    }, { cssClass: 'custom-popover' });
    popover.present({
      ev: myEvent
    });
  }

}
