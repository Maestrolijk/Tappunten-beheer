// imported plugins
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { StorageProvider } from '../../providers/storage/storage';

// imported pages
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('usernameInput') usernameInput;

  // variables
  username: string;
  loginname: string;
  showMe = false;
  remembertoggle: boolean;
  selectedTheme: String;
  loginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storageProvider: StorageProvider,
    public formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      remembertoggle: [false]
    });

  }

  ionViewDidLoad() {
    
    this.getUserName();

    setTimeout(() => {
      this.usernameInput.setFocus();
    }, 150);    
  }

  // do a user validation before continuing
  doLoadHomePage() {
    // this.username = this.username.toLowerCase();
    this.username = this.loginForm.value.username.toLowerCase();
    this.remembertoggle = this.loginForm.value.remembertoggle;

    if (this.username === "grobbens") {
      this.loginname = this.username;
      this.navCtrl.setRoot(TabsPage, { 'loginname': this.loginname });
    }
    else {
      // if user not eligable show login failed text
      this.showMe = true;
    }

    // if button is toggled, write the loginname to the localstorage
    if (this.remembertoggle === true) {
      this.storageProvider.setData("storedname", this.username);
    }
    else {
      this.storageProvider.setData("storedname", null);
    }

  }

  // get the name of the user from the local storage
  getUserName() {
    this.storageProvider.getData("storedname").then((val) => {
      if (val != null) {
        this.loginForm = this.formBuilder.group({
          username: [val, Validators.required],
          remembertoggle: [true]
       });
      }
    });
  }

}
