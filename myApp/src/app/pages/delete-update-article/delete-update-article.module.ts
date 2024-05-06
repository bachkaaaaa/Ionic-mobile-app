import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteUpdateArticlePageRoutingModule } from './delete-update-article-routing.module';

import { DeleteUpdateArticlePage } from './delete-update-article.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteUpdateArticlePageRoutingModule
  ],
  declarations: [DeleteUpdateArticlePage]
})
export class DeleteUpdateArticlePageModule {}
