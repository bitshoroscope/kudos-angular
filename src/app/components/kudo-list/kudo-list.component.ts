import { IKudo } from '../../models/kudo.model';
import { Component, OnInit } from '@angular/core';
import { DBService } from '../../services/db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kudo-list',
  templateUrl: './kudo-list.component.html',
  styleUrls: ['./kudo-list.component.css']
})
export class KudoListComponent implements OnInit {

  kudosList:IKudo[]

  constructor(private dbService:DBService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.dbService.getKudos().subscribe(kudos => {
      this.kudosList = kudos
    })
  }



}
