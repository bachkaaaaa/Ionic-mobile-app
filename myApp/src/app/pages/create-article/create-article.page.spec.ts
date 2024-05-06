import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateArticlePage } from './create-article.page';

describe('CreateArticlePage', () => {
  let component: CreateArticlePage;
  let fixture: ComponentFixture<CreateArticlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
