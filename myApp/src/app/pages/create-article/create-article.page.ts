import { Component } from '@angular/core';
import {DataService, Product} from "../../services/data.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.page.html',
  styleUrls: ['./create-article.page.scss'],
})
export class CreateArticlePage  {
  image: any;

  // @ts-ignore
  selectedFile: File = null;
  // @ts-ignore
  product: Product ;
  // @ts-ignore
  articleForm: FormGroup ;
  selectedCategory: any;
  constructor( private formBuilder:FormBuilder,private dataService:DataService,private authService: AuthServiceService) { }
  ngOnInit() {
    this.articleForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],

      price: ['', [Validators.required]]
      ,

      selectedCategory: ['', [Validators.required]]

    });
  }
  formatRangeValue(value: number) {
    return `$${(value*1000 )}`;
  }


  filechanged(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile); // You can check the file properties
  }
  send() {
    // Get the current user ID
    this.authService.getCurrentUser().subscribe(user => {
      if (user) {
        const userID = user.uid;
  
        // Assign userID to the product before adding it
        this.product = this.articleForm.value;
        this.dataService.addProduct(this.product, userID);
  
        console.log(this.product);
      }
    });
  }



}
