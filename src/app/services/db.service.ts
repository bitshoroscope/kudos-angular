import { IKudo } from './../models/kudo.model';
import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { IUser } from '../models/user.model';

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

  public saveKudo(giver:IUser, data: IKudo) {
    this.updateKudoCounter(giver.id);
    return this.firestore.collection('kudos').add(data);
  }

  async updateKudoCounter(userUid){
    let document:any = await this.getUserInfoByUID(userUid).ref.get().then(doc => {return doc.data()})
    let newKudos = document.kudosLeft - 1
    return this.firestore.collection('users').doc(userUid).update({kudosLeft: newKudos});
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