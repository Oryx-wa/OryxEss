import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { PortListComponent } from './port/port-list.component';
import {AgentListComponent } from './agents/agent-list.component';
import {BerthListComponent } from './berth/berth-list.component';
import {InspectorListComponent } from './inspector/inspector-list.component';

import {AddAgentFormComponent } from './agents/add-agent-form.component';
import {EditAgentFormComponent } from './agents/add-agent-form.component';

import { VesselService } from './vessel/vessel.service';
import { PortService } from './port/port.service';
import { AgentService } from './agents/agent.service';
import { BerthService } from './berth/berth.service';
import { InspectorService } from './inspector/inspector.service';

import { WelcomeComponent } from './home/welcome.component';
import { PortDetailComponent } from './port/port-detail.component';
import { VesselListComponent } from './vessel/vessel-list.component';
import { VesselDetailComponent } from './vessel/vessel-detail.component';
import { AgentDetailComponent } from './agents/agent-detail.component';
import { BerthDetailComponent } from './berth/berth-detail.component';
import { InspectorDetailComponent } from './inspector/inspector-detail.component';
@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [AgentService, VesselService, InspectorService,
        BerthService, PortService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
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
    { path: '/agents', component: AgentListComponent },
    { path: '/inspectors', component: InspectorListComponent },
    { path: '/addagent', component: AddAgentFormComponent },
     { path: '/editagent/:id', component: EditAgentFormComponent}
])
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}
