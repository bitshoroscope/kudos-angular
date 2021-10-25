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

  ngOnInit(): void {
    this.dbService.getKudos().subscribe(kudos => {
      this.kudosList = kudos.map( e=> {
        //To create an empty object of an interface
        let kudo = <IKudo>{};
        kudo.message = e.payload.doc.data()["message"]
        kudo.date = e.payload.doc.data()["date"]
        kudo.receiver = e.payload.doc.data()["receiver"]
        kudo.giver = e.payload.doc.data()["giver"]
        kudo.type = e.payload.doc.data()["type"]
        return kudo;
      })
    })
  }



}
