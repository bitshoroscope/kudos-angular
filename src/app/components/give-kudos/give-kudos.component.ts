import { IUser } from './../../models/user.model';
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

  usersList:IUser[]

  constructor(private dbService:DBService) { }

  ngOnInit(): void {
    this.fillUsersList();
  }

  private fillUsersList() {
    this.dbService.getUsers().subscribe(users => {
      this.usersList = users.map(e => {
        //To create an empty object of an interface
        let user = <IUser>{};
        user.email = e.payload.doc.data()["email"];
        user.username = e.payload.doc.data()["username"];
        user.id = e.payload.doc.data()["uid"];
        user.lastname = e.payload.doc.data()["lastname"];
        user.name = e.payload.doc.data()["name"];
        user.organization = e.payload.doc.data()["organization"];
        user.photoUrl = e.payload.doc.data()["photoUrl"];
        return user;
      });
    });
  }

  giveKudo(formValues){
    console.log(this.usersList)
    let kudo = <IKudo>{};
    kudo.date = new Date()
    kudo.type = 1
    kudo.message = formValues.message
    kudo.receiver = formValues.receiver
    kudo.giver = 'Andy'
  }

}
