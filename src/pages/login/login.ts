// imported plugins
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';

// imported pages
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // variables
  username: string;
  loginname: string;
  showMe = false;
  remembertoggle: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storageProvider: StorageProvider) { }

  ionViewDidLoad() {
    this.getUserName();
  }

  // do a user validation before continuing
  doLoadHomePage() {
    this.username = this.username.toLowerCase();
    if (this.username === "grobbens") {
      this.loginname = this.username;

      // if button is toggled, write the loginname to the localstorage
      if (this.remembertoggle === true) {
        this.storageProvider.setData("storedname", this.username);
      }
      else {
        this.storageProvider.setData("storedname", null);
      }
      this.navCtrl.setRoot(TabsPage, { 'loginname': this.loginname })
    }
    else {
      // if user not eligable show login failed text
      this.showMe = true;
    }
  }

  // get the name of the user from the local storage
  getUserName() {
    this.storageProvider.getData("storedname").then((val) => {
      this.username = val;
      if (val != null) {
        this.remembertoggle = true;
      }
    });
  }
}
