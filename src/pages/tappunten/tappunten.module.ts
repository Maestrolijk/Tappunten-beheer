import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TappuntenPage } from './tappunten';

@NgModule({
  declarations: [
    TappuntenPage,
  ],
  imports: [
    IonicPageModule.forChild(TappuntenPage),
  ],
})
export class TappuntenPageModule {}
