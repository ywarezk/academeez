import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserService } from './user.service';

@Directive({
  selector: '[appUser]'
})
export class UserDirective implements OnInit {

  constructor(
    private _template: TemplateRef<{$implicit: any}>,
    private _container: ViewContainerRef,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this._userService.user$.subscribe((user) => {
      if (user) {
        this._container.createEmbeddedView(this._template, {$implicit: user});
      }
    })
  }

}
