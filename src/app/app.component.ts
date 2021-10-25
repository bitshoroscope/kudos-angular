import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kudos-angular';

  ngAfterViewInit() {
    const elemDropdown = document.querySelectorAll('.dropdown-trigger');
  }

  constructor(public authService: AuthService) {

  }
}
