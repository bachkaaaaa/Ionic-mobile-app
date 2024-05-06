import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticleListPageRoutingModule } from './article-list-routing.module';

import { ArticleListPage } from './article-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleListPageRoutingModule
  ],
  declarations: [ArticleListPage]
})
export class ArticleListPageModule {}
