import { IKudo } from '../../models/kudo.model';
import { Component, OnInit } from '@angular/core';
import { DBService } from '../../services/db.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-kudo-list',
  templateUrl: './kudo-list.component.html',
  styleUrls: ['./kudo-list.component.css']
})
export class KudoListComponent implements OnInit {

  kudosSuscription:Subscription
  kudosList:IKudo[]

  constructor(private dbService:DBService, private route:ActivatedRoute) { }

  async ngOnInit() {

    let user:any = await this.dbService.getLoggedUser();

    this.dbService.getKudosByReceiver(user.name).subscribe(kudos => {
      this.kudosList = kudos.map( e=> {
        //To create an empty object of an interface
        let kudo = <IKudo>{};
        kudo.message = e.payload.doc.data()["message"]
        kudo.date = e.payload.doc.data()["date"]
        kudo.receiver = e.payload.doc.data()["receiver"]
        kudo.giver = e.payload.doc.data()["giver"]
        kudo.type = e.payload.doc.data()["type"]
        return kudo;
      }).sort(this.sortByDate)
    })

  }

  sortByDate(a, b) {
    if (a.date < b.date)
      return 1;
    if (a.date > b.date)
      return -1;
    return 0
  }


}
