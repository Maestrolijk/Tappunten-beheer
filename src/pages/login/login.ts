import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StorageProvider } from '../../providers/storage/storage';

// imported pages
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  splash = true;

  loginForm: FormGroup;

  username: string;
  loginname: string;
  showMe = false;
  remembertoggle: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storageProvider: StorageProvider,
    formBuilder: FormBuilder) { }

  ionViewDidLoad() {
    this.getUserName();
  }

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
      this.showMe = true;
    }
  }

  getUserName() {
    this.storageProvider.getData("storedname").then((val) => {
      this.username = val;
      if (val != null) {
        this.remembertoggle = true;
      }
    });

  }
}
