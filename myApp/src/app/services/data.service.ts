import { Injectable } from '@angular/core';
import {addDoc, collection, collectionData, doc, docData,deleteDoc, Firestore,query,where, Query } from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {AuthServiceService} from "../auth-service.service";

export class Product{
  id? : string;
  userId:string;
  title: string;
  description: string;
  selectedCategory:string;

  price:string;

  constructor(id:string,userId: string, title: string,description:string, price: string,selectedCategory:string) {
    this.userId = userId;
    this.id = id;

    this.title = title;
    this.price = price;
    this.selectedCategory=selectedCategory;
    this.description=description;
  }

}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore:Firestore) {

  }
  getAllProduct():Observable<Product[]>{
    const products=collection(this.firestore,"products");
    return collectionData(products) as unknown as Observable<Product[]>;}
  getAllProductByCategory(category: string): Observable<Product[]> {
    const q: Query = query(collection(this.firestore, 'products'), where('selectedCategory', '==', category));

    const products = collectionData(q) as unknown as Observable<Product[]>;
    return products;
  }
  // getProductByUserId(userId:any): Observable<Product[]> {
  //
  //   const jouralRef = collection(this.firestore, 'notes')
  //
  //   const  refq =  query(jouralRef,where('userId','==',userId))
  //   return collectionData(refq,{ idField: 'id'}) as Observable<Product[]>
  // }
    getProductById(id:string): Observable<Product> {
      const q: Query = query(collection(this.firestore, 'products'), where('id', '==', id));

      const products = collectionData(q) as unknown as Observable<Product>;
      return products;}

      addProduct(product: Product, userID: string) {
        // Set the userID field of the product
        product.userId = userID;
      
        const productsRef = collection(this.firestore, 'products');
        return addDoc(productsRef, product);
      }

        deleteProduct(product: Product)
      {
        const productDocRef = doc(this.firestore, 'products/${product.id}' );
        return deleteDoc(productDocRef);
      }



}
