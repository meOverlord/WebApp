import { Component, OnInit } from '@angular/core';
import {  Router, NavigationStart } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  public tabs = {
    signin: 'signin',
    signup: 'signup'
  };

  public selected: string = this.tabs.signin;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart),
      map((event: NavigationStart) => event.url),
    )
    .subscribe(url => this.handleRouteChange(url));
    this.handleRouteChange(this.router.url);
  }

  private handleRouteChange(url) {
    switch (url) {
      case '/auth/signup':
        this.selected = this.tabs.signup; break;
      default:
        this.selected = this.tabs.signin;
    }
  }

}
