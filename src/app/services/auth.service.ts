import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import { IUser } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser

  constructor(public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.currentUser = user;
        localStorage.setItem('user', JSON.stringify(this.currentUser));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.ngZone.run(() => {
        this.setUserData(result.user);
        this.router.navigate(['give-kudos']);
      });
    } catch (error) {
      window.alert(error.message);
    }
  }

  isAuthenticated() {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  async setUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData  = await userRef.ref.get().then(doc => {return doc.data()})
    this.currentUser = userData
    return userRef.set(userData, {
      merge: true
    })
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }
}
