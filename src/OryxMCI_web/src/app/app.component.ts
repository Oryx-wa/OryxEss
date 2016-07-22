
import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';

import { ROUTER_DIRECTIVES} from '@angular/router';
import {MdToolbar} from '@angular2-material/toolbar';
import { APP_PROVIDERS } from './app.providers';
import {SecurityService} from './login/security.service';
import {MaterializeDirective} from "angular2-materialize";
import {MD_SIDENAV_DIRECTIVES, MdSidenav} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {APP_PRECOMPILE} from './app.precompile'


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ APP_PROVIDERS ],
  directives: [ ROUTER_DIRECTIVES,  MD_SIDENAV_DIRECTIVES,  MaterializeDirective,
  MdToolbar, MD_LIST_DIRECTIVES]
})
export class AppComponent {
  title = 'app works1!';

  @ViewChild(MdSidenav) private menu: MdSidenav;
  constructor(public securityService: SecurityService) {  
    }
    ngOnInit() {
        console.log("ngOnInit _securityService.AuthorizedCallback");

        if (window.location.hash) {
            console.log("ngOnInit hash");
            this.securityService.AuthorizedCallback();
        }      
    }
 public Login() {
        console.log("Do login logic");
        this.securityService.Authorize(); 
        console.log("login completed");
    }

    public Logout() {
        console.log("Do logout logic");
        this.securityService.Logoff();
        console.log("Log out completed");
    }
  
get pushed(): boolean { return this.menu && this.menu.mode === 'side'; }

  get over(): boolean { return this.menu && this.menu.mode === 'over' && this.menu.opened; }

   @Input()
  get sidenavWidth(): number {
    return this.pushed ? 281 : 0;
  }


  private _scrollWidth: number = -1;

   @Input()
  get scrollWidth(): number {
    if (this._scrollWidth === -1) {
      var inner = document.createElement('p');
      inner.style.width = '100%';
      inner.style.height = '200px';

      var outer = document.createElement('div');
      outer.style.position = 'absolute';
      outer.style.top = '0px';
      outer.style.left = '0px';
      outer.style.visibility = 'hidden';
      outer.style.width = '200px';
      outer.style.height = '150px';
      outer.style.overflow = 'hidden';
      outer.appendChild(inner);

      document.body.appendChild(outer);
      var w1 = inner.offsetWidth;
      outer.style.overflow = 'scroll';
      var w2 = inner.offsetWidth;
      if (w1 == w2) w2 = outer.clientWidth;

      document.body.removeChild(outer);

      this._scrollWidth = (w1 - w2);
    }
    return this._scrollWidth;
  };
}
