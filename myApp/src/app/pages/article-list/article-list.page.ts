import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import {DataService, Product} from "../../services/data.service";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.page.html',
  styleUrls: ['./article-list.page.scss'],
})
export class ArticleListPage  {
   // @ts-ignore
  selectedCategory :string="All";

  items:Product[] = [];
  constructor(private dataService:DataService,private router: Router) {
    this.dataService.getAllProduct().subscribe((response)=>this.items=response)
    console.log(this.items);

  }

  getSelectedCategoryValue() {}

  onSelectionChange() {
    if(this.selectedCategory=="All")
      this.dataService.getAllProduct().subscribe((response)=>this.items=response)
  else
    this.dataService.getAllProductByCategory(this.selectedCategory).subscribe((response)=>this.items=response)
  }


  navigateToDetails(itemId: string|undefined) {
    // Navigate to another page with card details
    this.router.navigate(['/detail', itemId]);
  }
}
