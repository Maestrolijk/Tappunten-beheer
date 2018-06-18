import { Component } from '@angular/core';

import { OverzichtPage } from '../overzicht/overzicht';
import { InstellingenPage } from '../instellingen/instellingen';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OverzichtPage;
  tab2Root = InstellingenPage;

  constructor() {

  }
}
