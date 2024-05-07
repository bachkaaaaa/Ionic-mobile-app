import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'first-page',
    pathMatch: 'full'
  },
  {
    path: 'welcome-page',
    loadChildren: () => import('./pages/welcome-page/welcome-page.module').then(m => m.WelcomePagePageModule)
  },
  {
    path: 'create-article',
    loadChildren: () => import('./pages/create-article/create-article.module').then( m => m.CreateArticlePageModule)
  },
  {
    path: 'delete-update-article',
    loadChildren: () => import('./pages/delete-update-article/delete-update-article.module').then( m => m.DeleteUpdateArticlePageModule)
  },
  {
    path: 'first-page',
    loadChildren: () => import('./pages/first-page/first-page.module').then(m => m.FirstPagePageModule)
  },
  {
    path: 'article-list',
    loadChildren: () => import('./pages/article-list/article-list.module').then( m => m.ArticleListPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailPageModule)
  },

  {
    path: 'logging-in',
    loadChildren: () => import('./pages/logging-in/logging-in.module').then( m => m.LoggingInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
