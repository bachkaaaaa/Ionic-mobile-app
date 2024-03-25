import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoliginPage } from './noligin.page';

describe('NoliginPage', () => {
  let component: NoliginPage;
  let fixture: ComponentFixture<NoliginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NoliginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
