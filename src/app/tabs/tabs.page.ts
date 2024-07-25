import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, TabsCustomEvent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ triangle, ellipse, square });
  }

  handleWillChange({ tab }: TabsCustomEvent['detail']): void {
    console.log(`ionTabsWillChange: ${tab}`);
  }

  handleDidChange({ tab }: TabsCustomEvent['detail']): void {
    console.log(`ionTabsDidChange: ${tab}`);
  }
}
