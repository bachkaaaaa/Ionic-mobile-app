import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateArticlePage } from './create-article.page';

const routes: Routes = [
  {
    path: '',
    component: CreateArticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateArticlePageRoutingModule {}
