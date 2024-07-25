import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, ViewDidEnter, ViewDidLeave, ViewWillEnter, ViewWillLeave } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1-child',
  templateUrl: './tab1-child.page.html',
  styleUrls: ['./tab1-child.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, CommonModule, FormsModule]
})
export class Tab1ChildPage implements OnInit, OnDestroy, ViewWillEnter, ViewDidEnter, ViewWillLeave, ViewDidLeave {

  constructor() { }

  ngOnInit(): void {
    console.log('Tab1 Child: ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('Tab1 Child: ngOnDestroy');
  }

  ionViewWillEnter(): void {
    console.log('Tab1 Child: ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('Tab1 Child: ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('Tab1 Child: ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('Tab1 Child: ionViewDidLeave');
  }
}
