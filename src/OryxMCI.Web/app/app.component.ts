import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { PortListComponent } from './port/port-list.component';
import {AgentListComponent } from './agent/agent-list.component';
import {BerthListComponent } from './berth/berth-list.component';
import {InspectorListComponent } from './inspector/inspector-list.component';

import { VesselService } from './vessel/vessel.service';
import { PortService } from './port/port.service';
import { AgentService } from './agent/agent.service';
import { BerthService } from './berth/berth.service';
import { InspectorService } from './inspector/inspector.service';

import { WelcomeComponent } from './home/welcome.component';
import { PortDetailComponent } from './port/port-detail.component';
import { VesselListComponent } from './vessel/vessel-list.component';
import { VesselDetailComponent } from './vessel/vessel-detail.component';
import { AgentDetailComponent } from './agent/agent-detail.component';
import { BerthDetailComponent } from './berth/berth-detail.component';
import { InspectorDetailComponent } from './inspector/inspector-detail.component';
@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/vessels']">Vessel List</a></li>
                    <li><a [routerLink]="['/ports']">Port List</a></li>
                    <li><a [routerLink]="['/agent']">Agent List</a></li>
                    <li><a [routerLink]="['/berths']">Berth List</a></li>
                    <li><a [routerLink]="['/inspectors']">Inspector List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [AgentService, VesselService,InspectorService,BerthService, PortService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@Routes([
    { path: '/', component: WelcomeComponent },
    { path: '/welcome', component: WelcomeComponent },
    { path: '/ports', component: PortListComponent },
    { path: '/vessels', component: VesselListComponent },
     { path: '/berths', component: BerthListComponent },
    { path: '/vessel/:id', component: VesselDetailComponent },
    { path: '/port/:id', component: PortDetailComponent },
    { path: '/berth/:id', component: BerthDetailComponent },
    { path: '/inspector/:id', component: InspectorDetailComponent },
    { path: '/agent/:id', component: AgentDetailComponent },
    { path: '/agent', component: AgentListComponent },
    { path: '/inspectors', component: InspectorListComponent },
])
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}
