// imported plugins
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

// imported pages
import { LoginPage } from './../pages/login/login';
import { OverzichtPage } from '../pages/overzicht/overzicht';
import { InstellingenPage } from '../pages/instellingen/instellingen';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UsersPage } from '../pages/users/users';
import { TappuntenPage } from '../pages/tappunten/tappunten';
import { TappuntengroepenPage } from '../pages/tappuntengroepen/tappuntengroepen';
import { AfdelingenPage } from '../pages/afdelingen/afdelingen';
import { RuimtesPage } from '../pages/ruimtes/ruimtes';
import { TappuntenkoppelenPage } from '../pages/tappuntenkoppelen/tappuntenkoppelen';
import { NewuserPage } from '../pages/newuser/newuser';

//imported providers
import { StorageProvider } from '../providers/storage/storage';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    OverzichtPage,
    InstellingenPage,
    HomePage,
    TabsPage,
    UsersPage,
    TappuntenPage,
    TappuntengroepenPage,
    AfdelingenPage,
    RuimtesPage,
    TappuntenkoppelenPage,
    NewuserPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top',
      scrollAssist: false, 
      autoFocusAssist: false})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    OverzichtPage,
    InstellingenPage,
    HomePage,
    TabsPage,
    UsersPage,
    TappuntenPage,
    TappuntengroepenPage,
    AfdelingenPage,
    RuimtesPage,
    TappuntenkoppelenPage,
    NewuserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageProvider
  ]
})
export class AppModule {}