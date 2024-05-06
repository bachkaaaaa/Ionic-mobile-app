import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteUpdateArticlePage } from './delete-update-article.page';

describe('DeleteUpdateArticlePage', () => {
  let component: DeleteUpdateArticlePage;
  let fixture: ComponentFixture<DeleteUpdateArticlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteUpdateArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
