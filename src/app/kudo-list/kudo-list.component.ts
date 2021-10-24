import { IKudo } from './../models/kudo.model';
import { Component, OnInit } from '@angular/core';
import { DBService } from '../services/db.service';

@Component({
  selector: 'app-kudo-list',
  templateUrl: './kudo-list.component.html',
  styleUrls: ['./kudo-list.component.css']
})
export class KudoListComponent implements OnInit {

  kudosList = []

  constructor(private dbService:DBService) { }

  ngOnInit(): void {
    this.kudosList = this.dbService.getKudos()
  }



}
