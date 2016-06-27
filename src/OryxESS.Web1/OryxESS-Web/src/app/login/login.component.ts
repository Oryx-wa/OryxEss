import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { SecurityService } from './security.service';

@Component({
  template: `
    <h2>LOGIN</h2>
    <p>{{message}}</p>
    <p>
      <button (click)="login()"  *ngIf="!securityService.IsAuthorized">Login</button>
      <button (click)="logout()" *ngIf="securityService.IsAuthorized">Logout</button>
    </p>`
})
export class LoginComponent {
  message: string;

  constructor(public securityService: SecurityService, public router: Router) {
    this.setMessage();
  }

  ngOnInit() {
        console.log("ngOnInit _securityService.AuthorizedCallback");

        if (window.location.hash) {
            this.securityService.AuthorizedCallback();
        }      
    }
  setMessage() {
    this.message = 'Logged ' + (this.securityService.IsAuthorized ? 'in' : 'out');
  }

  public Login() {
        console.log("Do login logic");
        this.securityService.Authorize(); 
    }

    public Logout() {
        console.log("Do logout logic");
        this.securityService.Logoff();
    }
  
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/