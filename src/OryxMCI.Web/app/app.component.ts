import { Component } from '@angular/core';

import 'rxjs/Rx';   // Load all features
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import {LocalStorage, SessionStorage} from "angular2-localstorage/WebStorage";
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';

//import {SecurityService} from './services/security.service';
import {iouHeaderService} from './iou/iouheader.service';
import { WelcomeComponent } from './home/welcome.component';
import { IouListComponent } from './iou/iouheader-list.component';

@Component({
    selector: 'pm-app',    
    
     templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [iouHeaderService]
})
@Routes([
    { path: '/', component: WelcomeComponent },
    { path: '/welcome', component: WelcomeComponent },
    { path: '/Forbidden',  component: ForbiddenComponent },
    { path: '/Unauthorized',  component: UnauthorizedComponent },
    { path: '/iou', component: IouListComponent }
])
export class AppComponent {
    pageTitle: string = 'Oryx Employee Self Service';    
    //constructor(public securityService: SecurityService) {  
    //}
/*
    public Login() {
        console.log("Do login logic");
        this.securityService.Authorize(); 
    }

    public Logout() {
        console.log("Do logout logic");
        this.securityService.Logoff();
    }
    */
}
