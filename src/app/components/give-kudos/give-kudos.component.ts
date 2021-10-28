import { IUser } from './../../models/user.model';
import { DBService } from './../../services/db.service';
import { Component, OnInit } from '@angular/core';
import { IKudo } from 'src/app/models/kudo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-give-kudos',
  templateUrl: './give-kudos.component.html',
  styleUrls: ['./give-kudos.component.css']
})
export class GiveKudosComponent implements OnInit {

  receiver: IKudo
  message: string
  date: Date = new Date()
  user: any

  usersList: IUser[]

  constructor(private dbService: DBService, private router: Router) { }

  async ngOnInit() {
    this.user = await this.dbService.getLoggedUser();
    this.fillUsersList();
  }

  ngAfterViewInit(): void {
    setTimeout(function () {
      var elem = document.querySelector('select');
      M.FormSelect.init(elem, {});
    }, 0)
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
        user.kudosLeft = e.payload.doc.data()["kudosLeft"]
        return user;
      });
    });
  }

  async giveKudo(formValues) {
    let kudo = <IKudo>{};
    kudo.date = new Date();
    kudo.type = 1;
    kudo.message = formValues.message;
    console.log(formValues)
    kudo.receiver = formValues.receiver;
    kudo.giver = this.user.name;
    this.dbService.saveKudo(this.user, kudo);
    alert("The kudo has been sent!")
  }

  refreshComponent() {
    setTimeout(() => {
      let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
    }, 500);

  }

}
