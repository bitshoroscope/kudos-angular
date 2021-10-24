import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { IKudo } from 'src/app/models/kudo.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  public saveKudo(data: IKudo){
    return this.firestore.collection('kudos').add(data);
  }

  public getKudos(idUser: number){
    return this.firestore.collection('kudos').snapshotChanges();
  }
}
