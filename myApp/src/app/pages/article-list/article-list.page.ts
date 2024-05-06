import { Component } from '@angular/core';

import { InfiniteScrollCustomEvent } from '@ionic/angular';
import {DataService, Product} from "../../services/data.service";
import {DocumentData} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.page.html',
  styleUrls: ['./article-list.page.scss'],
})
export class ArticleListPage  {
  items:Product[] = [];
  constructor(private dataService:DataService) {
    this.dataService.getAllProduct().subscribe((response)=>this.items=response)
  }




}
