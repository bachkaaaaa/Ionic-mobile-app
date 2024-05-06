import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleListPage } from './article-list.page';

describe('ArticleListPage', () => {
  let component: ArticleListPage;
  let fixture: ComponentFixture<ArticleListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArticleListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
