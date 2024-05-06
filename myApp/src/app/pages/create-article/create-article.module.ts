import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateArticlePageRoutingModule } from './create-article-routing.module';

import { CreateArticlePage } from './create-article.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,    ReactiveFormsModule
,
    CreateArticlePageRoutingModule
  ],
  declarations: [CreateArticlePage]
})
export class CreateArticlePageModule {}
