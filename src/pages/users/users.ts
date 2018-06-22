import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

// imported pages
import { InstellingenPage } from '../instellingen/instellingen';
import { NewuserPage } from '../newuser/newuser';
import { EdituserPage } from '../edituser/edituser';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  errorMessage: string;
  descending: boolean = false;
  order: number;
  column: string = 'user';

  public users: any = [
    {
      "gebruikerid": 36,
      "AD_naam": "GeurinkJ",
      "naam": "Geurink J. (John)",
      "beheerder": 0,
      "telefoon": "6382",
      "weken_terug": "0"
    },
    {
      "gebruikerid": 26,
      "AD_naam": "WiltinkG",
      "naam": "Wiltink G. (Gerrike)",
      "beheerder": 0,
      "telefoon": "6153",
      "weken_terug": "0"
    },
    {
      "gebruikerid": 2,
      "AD_naam": "BosgoedR",
      "naam": "Bosgoed R. (Robert)",
      "beheerder": 1,
      "telefoon": "6076",
      "weken_terug": "0"
    },
    {
      "gebruikerid": 247,
      "AD_naam": "MeijdJ",
      "naam": "Meij J.E. de (Jacobine)",
      "beheerder": 0,
      "telefoon": "2948",
      "weken_terug": "0"
    }]

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  openInstellingenPage() {
    this.navCtrl.push(InstellingenPage)
  }

  newUser(myEvent) {

    let popover = this.popoverCtrl.create(NewuserPage, {}, { cssClass: 'custom-popover' });
    popover.present({
      ev: myEvent
    });
  }

  editUser(myEvent) {

    let popover = this.popoverCtrl.create(EdituserPage, {'myUserDataADNaam': myEvent.AD_naam, 
    'myUserDataNaam': myEvent.naam, 
    'myUserDataTelefoon': myEvent.telefoon,
    'myUserDataBeheerder': myEvent.beheerder}, { cssClass: 'custom-popover' });
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
