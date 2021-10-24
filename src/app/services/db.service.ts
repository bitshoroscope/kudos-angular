import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor() { }

  getKudos() {
    let subject = new Subject();
    setTimeout(() => {
      subject.next(KUDOS.sort(this.sortByDate));
      subject.complete
    })
    return subject;
  }

  sortByDate(a, b) {
    if (a.date < b.date)
      return 1;
    if (a.date > b.date)
      return -1;
    return 0
  }
}

const KUDOS = [{
  text: "Thank you so much for your effort",
  user: 'Andy',
  date: new Date('2021-10-02'),
}, {
  text: "Glad to have you with us. It's amazing!!",
  user: 'Bart',
  date: new Date('2021-11-02'),
}, {
  text: "Amazing job! It was marvelous!",
  user: 'Lisa',
  date: new Date('2021-09-02'),
}, {
  text: "This will be a really large text, in order to check the behavior of the card",
  user: 'Lisa',
  date: new Date('2021-09-02'),
}]