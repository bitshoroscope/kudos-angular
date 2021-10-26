import { IKudo } from './../models/kudo.model';
import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor(private firestore: AngularFirestore, public afs: AngularFirestore) { }


  getKudos() {
    return this.firestore.collection('kudos').snapshotChanges();
  }

  getKudosByReceiver(receiver: string) {
    return this.firestore.collection('kudos', ref => ref.where('receiver', '==', receiver)).snapshotChanges();
  }

  public saveKudo(data: IKudo) {
    return this.firestore.collection('kudos').add(data);
  }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }

  getUserInfoByUID(uid:string){
    return this.afs.doc(`users/${uid}`);
  }

  async getLoggedUser() {
    let uid = JSON.parse(localStorage.user).uid;
    let user = await this.getUserInfoByUID(uid).ref.get().then(doc => { return doc.data(); });
    return user;
  }
}