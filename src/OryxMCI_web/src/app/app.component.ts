
import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';

import { ROUTER_DIRECTIVES} from '@angular/router';
import {MdToolbar} from '@angular2-material/toolbar';
import { APP_PROVIDERS } from './app.providers';
import {SecurityService} from './login/security.service';
import {MaterializeDirective} from "angular2-materialize";
import {MD_SIDENAV_DIRECTIVES, MdSidenav} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {APP_PRECOMPILE} from './app.precompile';
import { Configuration } from './app.constants';


import {HomeComponent} from './home'
import {AgentsComponent} from './agents/agents.component';
import {VesselsComponent} from './vessels/vessels.component';
import {BerthsComponent} from './berths/berths.component';
import {PortsComponent} from './ports/ports.component';
import {InspectorsComponent} from './inspectors/inspectors.component';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ APP_PROVIDERS ],
  directives: [ ROUTER_DIRECTIVES,  MD_SIDENAV_DIRECTIVES,  MaterializeDirective,
  MdToolbar, MD_LIST_DIRECTIVES],
  precompile: [APP_PRECOMPILE ]
})
export class AppComponent {
    title = 'app works1!';
    private returnUrl: string;
    private idServerUrl: string;

  @ViewChild(MdSidenav) private menu: MdSidenav;
  constructor(public securityService: SecurityService, 
    
    private _configuration: Configuration) {
        this.returnUrl = _configuration.returnUrl;
        this.idServerUrl = _configuration.idServer;   
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
