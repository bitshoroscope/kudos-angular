import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kudo',
  templateUrl: './kudo.component.html',
  styleUrls: ['./kudo.component.css']
})
export class KudoComponent implements OnInit {

  @Input() kudo:any;

  constructor() { }

  ngOnInit(): void {
  }

}
