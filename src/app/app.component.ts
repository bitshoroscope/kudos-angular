import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kudos-angular';

  constructor(public authService: AuthService){
  }

  ngAfterViewInit(): void {
    setTimeout( function() {
      var elem = document.querySelector('.dropdown-trigger');
      var instance = M.Dropdown.init(elem, {});
    }, 0)
  }

}
