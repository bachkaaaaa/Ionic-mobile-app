import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstPagePage } from './first-page.page';

describe('FirstPagePage', () => {
  let component: FirstPagePage;
  let fixture: ComponentFixture<FirstPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FirstPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
