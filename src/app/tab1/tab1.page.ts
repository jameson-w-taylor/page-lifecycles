import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonRouterLink, ViewDidEnter, ViewDidLeave, ViewWillEnter, ViewWillLeave } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterLink, IonRouterLink, ExploreContainerComponent],
})
export class Tab1Page implements OnInit, OnDestroy, ViewWillEnter, ViewDidEnter, ViewWillLeave, ViewDidLeave {
  
  constructor() { }

  ngOnInit(): void {
    console.log('Tab1: ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('Tab1: ngOnDestroy');
  }

  ionViewWillEnter(): void {
    console.log('Tab1: ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('Tab1: ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('Tab1: ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('Tab1: ionViewDidLeave');
  }
}
