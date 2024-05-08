import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientPage } from './client.page';

describe('ClientPage', () => {
  let component: ClientPage;
  let fixture: ComponentFixture<ClientPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
