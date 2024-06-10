import { Component } from '@angular/core';
import { AccountService } from '../../../account/account.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css',
})
export class TopNavComponent {
  user_name: any = JSON.parse(localStorage.getItem('user') || '')?.username;

  constructor(private accountService: AccountService) {}

  logout() {
    this.accountService.logout();
  }
}
