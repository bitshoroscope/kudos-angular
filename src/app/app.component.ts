import { DBService } from './services/db.service';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'kudos-angular';
  user:any

  constructor(public authService: AuthService, private dbService:DBService){
  }

  async ngOnInit() {
      this.user = await this.dbService.getLoggedUser();
  }

  ngAfterViewInit(): void {
    setTimeout( function() {
      var elem = document.querySelector('.dropdown-trigger');
      M.Dropdown.init(elem, {});
    }, 0)
  }

}
