import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OverzichtPage } from './overzicht';

@NgModule({
  declarations: [
    OverzichtPage,
  ],
  imports: [
    IonicPageModule.forChild(OverzichtPage),
  ],
})
export class OverzichtPageModule {}