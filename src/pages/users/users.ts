import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, PopoverController } from 'ionic-angular';

// imported pages
import { InstellingenPage } from '../instellingen/instellingen';
import { NewuserPage } from '../newuser/newuser';

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

  public users: any = [
    {
      "gebruikerid": 36,
      "AD_naam": "GeurinkJ",
      "naam": "Geurink J. (John)",
      "beheerder": 0,
      "afdeling": "Intensive Care",
      "telefoon": "6382",
      "weken_terug": "0"
    },
    {
      "gebruikerid": 26,
      "AD_naam": "WiltinkG",
      "naam": "Wiltink G. (Gerrike)",
      "beheerder": 0,
      "afdeling": "Neonatologie",
      "telefoon": "6153",
      "weken_terug": "0"
    },
    {
      "gebruikerid": 2,
      "AD_naam": "BosgoedR",
      "naam": "Bosgoed R. (Robert)",
      "beheerder": 1,
      "afdeling": "ICT",
      "telefoon": "6076",
      "weken_terug": "0"
    },
    {
      "gebruikerid": 247,
      "AD_naam": "MeijdJ",
      "naam": "Meij J.E. de (Jacobine)",
      "beheerder": 0,
      "afdeling": "Spoed Eisende Hulp",
      "telefoon": "2948",
      "weken_terug": "0"
    }]

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  openInstellingenPage() {
    this.navCtrl.push(InstellingenPage)
  }

  newUser(myEvent) {

    let popover = this.popoverCtrl.create(NewuserPage, {}, {cssClass: 'custom-popover'});
    popover.present({
      ev: myEvent
    });
  }

  // let alert = this.alertCtrl.create({
  //   title: 'Nieuwe gebruiker aanmaken',
  //   message: 'Vul de volgende velden',
  //   inputs: [
  //     {
  //       name: 'adnaam',
  //       placeholder: 'AD_naam'
  //     },
  //     {
  //       name: 'naam',
  //       placeholder: 'Naam'
  //     },
  //     {
  //       name: 'beheerder',
  //       placeholder: 'Beheerder'
  //     },
  //     {
  //       name: 'afdeling',
  //       type: 'radio',
  //       placeholder: 'Afdeling'
  //     },
  //     {
  //       name: 'telefoon',
  //       type: 'number',
  //       placeholder: 'Telefoon'
  //     },
  //   ],
  //   buttons: [
  //     {
  //       text: 'Annuleer',
  //       handler: () => {
  //         console.log('Cancel clicked');
  //       }
  //     },
  //     {
  //       text: 'Opslaan',
  //       handler: () => {
  //         console.log('Saved clicked');
  //       }
  //     }
  //   ]
  // });
  // alert.present();

}
