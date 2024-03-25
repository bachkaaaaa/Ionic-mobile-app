import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomePagePage } from './welcome-page.page';

describe('WelcomePagePage', () => {
  let component: WelcomePagePage;
  let fixture: ComponentFixture<WelcomePagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WelcomePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
