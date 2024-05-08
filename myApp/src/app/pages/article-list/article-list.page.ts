import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


import {DataService, Product} from "../../services/data.service";
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.page.html',
  styleUrls: ['./article-list.page.scss'],
})
export class ArticleListPage {

  selectedCategory: string = "All";
  items: Product[] = [];

  constructor(
    private dataService: DataService,
    private authService: AuthServiceService,
    private router: Router
  ) {
    this.loadData();
  }

  loadData() {
    if (this.selectedCategory === 'My Art') {
      this.authService.getProfile().then(user => {
        if (user) {
          this.dataService.getProductsByUserID(user.uid).subscribe(products => {
            this.items = products;
          });
        }
      }).catch(error => {
        console.error('Error getting user profile:', error);
      });
    } else if (this.selectedCategory === 'All') {
      this.dataService.getAllProduct().subscribe(products => {
        this.items = products;
      });
    } else {
      this.dataService.getAllProductByCategory(this.selectedCategory).subscribe(products => {
        this.items = products;
      });
    }
  }

  getSelectedCategoryValue() {
    this.loadData();
  }

  onSelectionChange() {
    this.loadData();
  }

  navigateToDetails(itemId: string | undefined) {
    console.log('Item ID:', itemId); 
    if (itemId) {
      // Navigate to another page with card details
      this.router.navigate(['/detail', itemId]);
    }
  }
}
