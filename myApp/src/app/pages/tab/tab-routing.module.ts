import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../article-list/article-list.module').then( m => m.ArticleListPageModule)
      },{
        path: 'tab3',
        loadChildren: () => import('../client/client.module').then( m => m.ClientPageModule)
      },{
        path: 'tab2',
        loadChildren: () => import('../create-article/create-article.module').then( m => m.CreateArticlePageModule)
      },


]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
