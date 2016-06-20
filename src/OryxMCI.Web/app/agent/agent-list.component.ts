import { Component, OnInit }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { IAgent } from './agent';
import { AgentFilterPipe } from './agent-filter.pipe';
import { AgentService } from './agent.service';

@Component({
    templateUrl: 'app/agent/agent-list.component.html',
    styleUrls: ['app/agent/agent-list.component.css'],
    pipes: [AgentFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})
export class AgentListComponent implements OnInit {
    pageTitle: string = 'Agent List';
    listvFilter: string = '';
    errorMessage: string;
    agents: IAgent[];

    constructor(private _agentService: AgentService) {

    }

    ngOnInit(): void {
           this._agentService.getagents()
                     .subscribe(
                       agents => this.agents = agents,
                       error =>  this.errorMessage = <any>error);
    }
}
