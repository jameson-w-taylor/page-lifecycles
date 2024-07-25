import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab1ChildPage } from './tab1-child.page';

describe('Tab1ChildPage', () => {
  let component: Tab1ChildPage;
  let fixture: ComponentFixture<Tab1ChildPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1ChildPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
