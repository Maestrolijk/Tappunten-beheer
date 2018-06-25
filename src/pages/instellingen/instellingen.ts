// imported plugins
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// imported pages
import { UsersPage } from '../users/users';
import { TappuntenPage } from '../tappunten/tappunten';
import { TappuntengroepenPage } from '../tappuntengroepen/tappuntengroepen';
import { AfdelingenPage } from '../afdelingen/afdelingen';
import { RuimtesPage } from '../ruimtes/ruimtes';
import { TappuntenkoppelenPage } from '../tappuntenkoppelen/tappuntenkoppelen';

@Component({
  selector: 'page-instellingen',
  templateUrl: 'instellingen.html'
})
export class InstellingenPage {

  constructor(public navCtrl: NavController) {

  }

  // open the various pages
  openUsersPage() {
    this.navCtrl.push(UsersPage);
  }

  openTappuntengroepenPage() {
    this.navCtrl.push(TappuntengroepenPage);
  }

  openTappuntenPage() {
    this.navCtrl.push(TappuntenPage);
  }

  openAfdelingenPage() {
    this.navCtrl.push(AfdelingenPage);
  }

  openRuimtesPage() {
    this.navCtrl.push(RuimtesPage);
  }

  openTappuntenkoppelenPage() {
    this.navCtrl.push(TappuntenkoppelenPage);
  }
}
