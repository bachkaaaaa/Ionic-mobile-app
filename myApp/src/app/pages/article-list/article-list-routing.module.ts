import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleListPage } from './article-list.page';

const routes: Routes = [
  {
    path: '',
    component: ArticleListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleListPageRoutingModule {}
