// imported plugins
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

// imported pages
import { InstellingenPage } from '../instellingen/instellingen';
import { NewuserPage } from '../newuser/newuser';
import { EdituserPage } from '../edituser/edituser';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  // variables for sorting
  errorMessage: string;
  descending: boolean = false;
  order: number;
  column: string = 'user';

  // variables for filtering
  columnname: string;
  termsadnaam: string;
  termsnaam: string;
  termstelefoon: string;
  termsbeheerder: string;
  terms: string;

  // users JSON object
  public users: any = [
    {
      "gebruikerid": 36,
      "AD_naam": "GeurinkJ",
      "naam": "Geurink J. (John)",
      "beheerder": "Nee",
      "telefoon": "6382",
      "weken_terug": "0"
    },
    {
      "gebruikerid": 26,
      "AD_naam": "WiltinkG",
      "naam": "Wiltink G. (Gerrike)",
      "beheerder": "Nee",
      "telefoon": "6153",
      "weken_terug": "0"
    },
    {
      "gebruikerid": 2,
      "AD_naam": "BosgoedR",
      "naam": "Bosgoed R. (Robert)",
      "beheerder": "Ja",
      "telefoon": "6076",
      "weken_terug": "0"
    },
    {
      "gebruikerid": 247,
      "AD_naam": "MeijdJ",
      "naam": "Meij J.E. de (Jacobine)",
      "beheerder": "Nee",
      "telefoon": "2948",
      "weken_terug": "0"
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

  // open popover page for creating a new user
  newUser(myEvent) {
    let popover = this.popoverCtrl.create(NewuserPage, { 'myUsers': this.users }, { cssClass: 'custom-popover' });
    popover.present({
      ev: myEvent
    });
  }

  // open popover page for editing a user
  editUser(myEvent, index) {
    let popover = this.popoverCtrl.create(EdituserPage, {
      'myUsers': this.users,
      'myUserDataADNaam': myEvent.AD_naam,
      'myUserDataNaam': myEvent.naam,
      'myUserDataTelefoon': myEvent.telefoon,
      'myUserDataBeheerder': myEvent.beheerder,
      'myUserDataIndex': index
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
    if (value === 'adnaam') {
      this.terms = this.termsadnaam;
    }
    if (value === 'naam') {
      this.terms = this.termsnaam;
    }
    if (value === 'telefoon') {
      this.terms = this.termstelefoon;
    }
    if (value === 'beheerder') {
      this.terms = this.termsbeheerder;
    }
  }
}
