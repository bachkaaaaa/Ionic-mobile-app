import { Injectable } from '@angular/core';
import { AngularFireAuth, } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, getAuth, getRedirectResult, signInWithPopup,onAuthStateChanged } from "firebase/auth";
import { User } from 'firebase/auth';

import { Observable, async } from 'rxjs';
import firebase from 'firebase/compat/app';
import { error, log } from 'console';
import {
    CollectionReference,
    DocumentData,
    addDoc,
    collection,
    deleteDoc,
    doc,
    updateDoc,
} from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { userInfo } from 'os';

export interface Users{
    name:string;
    email: string
}


@Injectable({
    providedIn: 'root'
})
export class AuthServiceService {


    constructor(public ngFireAuth: AngularFireAuth) {

    }

    async registerUser(email: string, password: string, name: string) {
        return await this.ngFireAuth.createUserWithEmailAndPassword(email, password)

    }

    async loginUser(email: string, password: string) {
        return await this.ngFireAuth.signInWithEmailAndPassword(email, password);

    }

    async resetPassword(email: string) {
        return await this.ngFireAuth.sendPasswordResetEmail(email);

    }
    async getProfile():Promise <User | null> {
        return new Promise<User | null>((resolve, reject) => {
            this.ngFireAuth.onAuthStateChanged(user => {
                if (user) {
                    resolve(user as User);
                } else {
                    resolve(null);
                }
            }, reject);
        })
    }
    getCurrentUser(): Observable<User | null> {
        const auth = getAuth(); // Get the Firebase Auth instance
        return new Observable<User | null>(subscriber => {
          const unsubscribe = onAuthStateChanged(auth, (user) => {
            subscriber.next(user);
          }, (error) => {
            subscriber.error(error);
          });
    
          // Ensure proper cleanup when the component unsubscribes
          return () => unsubscribe();
        });
      }
    async signOut() {
        return await this.ngFireAuth.signOut();
    }




}
