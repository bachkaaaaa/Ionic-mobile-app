import { Component } from '@angular/core';
import {DataService, Product} from "../../services/data.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';
import { FirebaseStorage, getDownloadURL, getStorage, ref, uploadBytesResumable } from '@angular/fire/storage';
import { firstValueFrom } from 'rxjs';

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
      price: ['', [Validators.required]],
      selectedCategory: ['', [Validators.required]],
      image: [''] // Add the image control to the form
    });
  }
  formatRangeValue(value: number) {
    return `$${(value*1000 )}`;
  }


  fileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile); // You can check the file properties
  }
  
  async send() {
    const currentUser = await firstValueFrom(this.authService.getCurrentUser());
  
    if (currentUser) {
      const userId = currentUser.uid;
  
      // Upload image to Firebase Storage
      try {
        const filePath = `Products/${new Date().getTime()}_${this.selectedFile.name}`;
        const storageRef = ref(getStorage(), filePath);
        const uploadTask = await uploadBytesResumable(storageRef, this.selectedFile);
        const downloadURL = await getDownloadURL(uploadTask.ref);
  
        // Update product with imageURL and add to Firestore
        this.product = { ...this.articleForm.value, imageURL: downloadURL };
        await this.dataService.addProduct(this.product, userId);
        console.log('Product added successfully!');
      } catch (error) {
        console.error('Error uploading image or adding product:', error);
        // Handle errors appropriately, e.g., display error message to user
      }
    } else {
      console.error('No user signed in. Cannot add product.');
    }
  }
  
  
  



}
