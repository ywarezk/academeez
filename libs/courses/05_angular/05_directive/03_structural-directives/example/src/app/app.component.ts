import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user$ = this._userService.user$;

  constructor(private _userService: UserService) {}

  whenClick() {}

  login() {
    this._userService.user$.next({ name: 'Yariv' });
  }
}
