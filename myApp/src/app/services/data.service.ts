import { Injectable } from '@angular/core';
import {addDoc, collection, collectionData, doc, docData,deleteDoc, Firestore,query,where} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {AuthServiceService} from "../auth-service.service";

export class Product{
  id? : string;
  userId:string;
  title: string;
  content:string;
  createdAt:any

  constructor(userId: string, title: string, content: string, createdAt: any) {
    this.userId = userId;
    this.title = title;
    this.content = content;
    this.createdAt = createdAt;
  }

}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userId:any

  constructor(private firestore:Firestore,private authService:AuthServiceService) {

    this.authService.getProfile().then(user => {

      this.userId = user?.uid;
      console.log(user?.uid);
      // this.journalCollection = co;;

    }).catch(error => {
      console.error('Error getting user profile:', error);
    });
  }
  getAllProduct():Observable<Product[]>{
    const products=collection(this.firestore,"products");
    return collectionData(products) as unknown as Observable<Product[]>;}
  getProductByUserId(userId:any): Observable<Product[]> {

    const jouralRef = collection(this.firestore, 'notes')

    const  refq =  query(jouralRef,where('userId','==',userId))
    return collectionData(refq,{ idField: 'id'}) as Observable<Product[]>
  }
    getProductById(id:string): Observable<Product> {
      const ProductDocRef = doc(this.firestore, 'products/${id} ');
      return docData(ProductDocRef, { idField: 'id' }) as Observable<Product>;}

      addProduct(product: Product) {
        product.userId = this.userId;
        const productsRef = collection(this.firestore, 'products');
        return addDoc(productsRef, product);}

        deleteProduct(product: Product)
      {
        const productDocRef = doc(this.firestore, 'products/${product.id}' );
        return deleteDoc(productDocRef);
      }



}
