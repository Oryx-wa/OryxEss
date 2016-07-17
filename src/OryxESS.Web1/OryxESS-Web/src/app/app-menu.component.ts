import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

//3rd Party imports
import {MaterializeDirective} from "angular2-materialize";
import { FaDirective } from 'angular2-fontawesome/directives';

//SecurityService
import {SecurityService} from './login/security.service';
//import menus 
import {WorkflowMenuComponent} from './workflow/menu/workflow-menu.component';
import {IouMenuComponent} from './iou/menu/iou-menu.component'



@Component({
  moduleId: module.id,
  selector: 'app-app-menu',
  templateUrl: 'app-menu.component.html',
  styleUrls: ['app-menu.component.css'],
   directives: [ROUTER_DIRECTIVES, MaterializeDirective,
     WorkflowMenuComponent, IouMenuComponent,FaDirective,]
      
})
export class AppMenuComponent implements OnInit {

  constructor(public securityService: SecurityService) {}

  ngOnInit() {
          
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
