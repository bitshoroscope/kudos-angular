import { IKudo } from './../models/kudo.model';
import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor(private firestore: AngularFirestore) { }

  /*   getKudos():Observable<IKudo[]> {
      let subject = new Subject<IKudo[]>();
      setTimeout(() => {
        subject.next(KUDOS.sort(this.sortByDate));
        subject.complete
      })
      return subject;
    } */

  getKudos() {
    return this.firestore.collection('kudos').snapshotChanges();
  }

  public saveKudo(data: IKudo) {
    return this.firestore.collection('kudos').add(data);
  }

  sortByDate(a, b) {
    if (a.date < b.date)
      return 1;
    if (a.date > b.date)
      return -1;
    return 0
  }
}

const KUDOS: IKudo[] = [{
  message: "Thank you so much for your effort",
  giver: 'Andy',
  receiver: 'Homer',
  date: new Date('2021-10-02'),
  type: 1
}, {
  message: "Glad to have you with us. It's amazing!!",
  giver: 'Bart',
  receiver: 'Homer',
  date: new Date('2021-11-02'),
  type: 1
}, {
  message: "Amazing job! It was marvelous!",
  giver: 'Andy',
  receiver: 'Lisa',
  date: new Date('2021-09-02'),
  type: 1
}, {
  message: "This will be a really large text, in order to check the behavior of the card",
  giver: 'Lisa',
  receiver: 'Andy',
  date: new Date('2021-09-02'),
  type: 1
}]