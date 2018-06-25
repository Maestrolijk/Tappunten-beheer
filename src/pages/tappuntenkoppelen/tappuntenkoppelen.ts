// imported plugins
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { differenceWith } from 'lodash';

// imported pages
import { InstellingenPage } from '../instellingen/instellingen';

@IonicPage()
@Component({
  selector: 'page-tappuntenkoppelen',
  templateUrl: 'tappuntenkoppelen.html',
})
export class TappuntenkoppelenPage {

  // variables
  tappunt: any;
  tappuntgroepen: any;
  tappuntgroep: any;
  tappuntenOriginal: any;
  tappuntenAdded: any;

  temptappuntgroep: string;
  tappuntgroepnummer: number;
  tappuntgroepfiltered: any;

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
    public navParams: NavParams) {

    // tappuntgroepen JSON object
    this.tappuntgroepen = [
      { id: 0, name: '' },
      { id: 1, name: 'Fysiotherapie' },
      { id: 2, name: 'Intensive Care' },
      { id: 3, name: 'Dialyse' },
      { id: 4, name: 'Neonatologie' },
      { id: 5, name: 'KNO' },
      { id: 6, name: 'ICT' },
      { id: 7, name: 'Spoed Eisende Hulp' },
      { id: 8, name: 'Geriatrie' }
    ];

    // set original object
    this.tappuntenOriginal = this.tappunten;

    // get the right tappuntgroep from the list
    this.tappuntgroepfiltered = this.tappuntgroepen;
    this.temptappuntgroep = navParams.get('myDataTappuntgroep');
    this.tappuntgroepfiltered = this.tappuntgroepen.filter(i => i.name == this.temptappuntgroep);
    for (let key of this.tappuntgroepfiltered) {
      this.tappuntgroepnummer = key.id;
    }
    this.tappuntgroep = this.tappuntgroepen[this.tappuntgroepnummer];
  }

  ionViewDidLoad() { }

  // open instellingen page
  openInstellingenPage() {
    this.navCtrl.push(InstellingenPage)
  }

  // when tappunten from the left list are clicked they disappear and appear on the list to the right
  addTappunten(tappuntData) {
    this.tappunten = this.tappunten.filter(i => i.tappuntId != tappuntData.tappuntId);
    this.tappuntenAdded = differenceWith(this.tappuntenOriginal, this.tappunten);
  }

  // when tappunten from the right list are clicked they disappear and appear on the list to the left
  deleteTappunten(tappuntData) {
    this.tappuntenAdded = this.tappuntenAdded.filter(i => i.tappuntId != tappuntData.tappuntId);
    this.tappunten = differenceWith(this.tappuntenOriginal, this.tappuntenAdded);
  }
}
