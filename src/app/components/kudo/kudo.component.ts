import { IKudo } from '../../models/kudo.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kudo',
  templateUrl: './kudo.component.html',
  styleUrls: ['./kudo.component.css']
})
export class KudoComponent implements OnInit {

  @Input() kudo:IKudo;

  constructor() { }

  ngOnInit(): void {
  }

}
