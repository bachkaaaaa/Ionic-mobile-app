import { Component } from '@angular/core';
import {DataService, Product} from "../../services/data.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor( private formBuilder:FormBuilder,private dataService:DataService) { }
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
  send(){
    // @ts-ignore
    this.product=this.articleForm.value;
    return console.log( this.product),
    // @ts-ignore
    this.dataService.addProduct(this.product);
  }



}
