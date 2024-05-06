import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteUpdateArticlePage } from './delete-update-article.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteUpdateArticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteUpdateArticlePageRoutingModule {}
