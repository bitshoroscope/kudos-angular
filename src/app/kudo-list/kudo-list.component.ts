import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kudo-list',
  templateUrl: './kudo-list.component.html',
  styleUrls: ['./kudo-list.component.css']
})
export class KudoListComponent implements OnInit {

  kudosList = [{
    text: "Thank you so much for your effort",
    user: 'Andy',
    date: '2021-10-02',
  }, {
    text: "Glad to have you with us. It's amazing!!",
    user: 'Bart',
    date: '2021-11-02',
  }, {
    text: "Amazing job! It was marvelous!",
    user: 'Lisa',
    date: '2021-09-02',
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
