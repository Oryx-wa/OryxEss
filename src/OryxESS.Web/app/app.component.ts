import {Component} from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { APP_PROVIDERS } from './app.providers';
import {SecurityService} from './services/security.service';

import {ForbiddenComponent} from './forbidden/forbidden.component';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';


import { WelcomeComponent } from './home/welcome.component';
import { IouComponent } from './iou/iou.component';

@Component({ 
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ APP_PROVIDERS ]
})
export class AppComponent {
  
  pageTitle: string = 'Oryx Employee Self Service';    
    constructor(public securityService: SecurityService) {  
    }
    ngOnInit() {
        console.log("ngOnInit _securityService.AuthorizedCallback");

        if (window.location.hash) {
            this.securityService.AuthorizedCallback();
        }      
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



