import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabPage } from './tab.page';

describe('TabPage', () => {
  let component: TabPage;
  let fixture: ComponentFixture<TabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
