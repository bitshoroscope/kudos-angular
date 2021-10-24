import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-give-kudos',
  templateUrl: './give-kudos.component.html',
  styleUrls: ['./give-kudos.component.css']
})
export class GiveKudosComponent implements OnInit {

  userTo:string
  message:string
  date:Date = new Date()

  constructor() { }

  ngOnInit(): void {
  }

  giveKudo(formValues){
    console.log(formValues)
  }

}
