import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoggingInPage } from './logging-in.page';

describe('LoggingInPage', () => {
  let component: LoggingInPage;
  let fixture: ComponentFixture<LoggingInPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoggingInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
