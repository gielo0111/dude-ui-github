import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  onLogoutClick(){
    this.auth.logout();
  }

  checkToken(){
    return this.auth.isLoggedIn();
  }

}
