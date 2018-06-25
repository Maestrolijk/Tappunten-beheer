// imported plugins
import { Component } from '@angular/core';

// imported pages
import { OverzichtPage } from '../overzicht/overzicht';
import { InstellingenPage } from '../instellingen/instellingen';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // variables
  tab1Root = OverzichtPage;
  tab2Root = InstellingenPage;

  constructor() {

  }
}
