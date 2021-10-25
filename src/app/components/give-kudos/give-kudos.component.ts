import { DBService } from './../../services/db.service';
import { Component, OnInit } from '@angular/core';
import { IKudo } from 'src/app/models/kudo.model';

@Component({
  selector: 'app-give-kudos',
  templateUrl: './give-kudos.component.html',
  styleUrls: ['./give-kudos.component.css']
})
export class GiveKudosComponent implements OnInit {

  receiver:string
  message:string
  date:Date = new Date()

  constructor(private dbService:DBService) { }

  ngOnInit(): void {
  }

  giveKudo(formValues){
    let kudo = <IKudo>{};
    kudo.date = new Date()
    kudo.type = 1
    kudo.message = formValues.message
    kudo.receiver = formValues.receiver
    kudo.giver = 'Andy'
    this.dbService.saveKudo(kudo)
  }

}
