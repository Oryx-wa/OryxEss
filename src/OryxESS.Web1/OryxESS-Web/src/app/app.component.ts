import {Component} from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { APP_PROVIDERS } from './app.providers';
import {SecurityService} from './login/security.service';


//3rd Party imports
import {MaterializeDirective} from "angular2-materialize";

import {ForbiddenComponent} from './forbidden/forbidden.component';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';
import {AppMenuComponent} from './app-menu.component';

import { HomeComponent } from './home/home.component';
//import { IouComponent } from './iou/iouheader/iou.component';

@Component({ 
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, MaterializeDirective, AppMenuComponent] ,
  providers: [ APP_PROVIDERS ]
})
export class AppComponent {
  title:string = 'Oryx Employee Self Service' ;
  pageTitle: string = 'Oryx Employee Self Service';    

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
  
}



