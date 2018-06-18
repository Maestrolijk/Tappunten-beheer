import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewtappuntPage } from './newtappunt';

@NgModule({
  declarations: [
    NewtappuntPage,
  ],
  imports: [
    IonicPageModule.forChild(NewtappuntPage),
  ],
})
export class NewtappuntPageModule {}
