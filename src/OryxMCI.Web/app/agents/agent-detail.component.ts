import { Component } from '@angular/core';
import { Router, OnActivate, RouteSegment } from '@angular/router';

import { IAgent } from './agent';
import { AgentService } from './agent.service';

@Component({
    templateUrl: 'app/agents/agent-detail.component.html'
})
export class AgentDetailComponent implements OnActivate {
    pageTitle: string = 'agent Detail';
    agent: IAgent;
    errorMessage: string;

    constructor(private _agentService: AgentService,
                private _router: Router) {
    }

    routerOnActivate(curr: RouteSegment): void {
        let id = +curr.getParam('id');
        this.getAgent(id);
    }

    getAgent(id: number) {
        this._agentService.getagent(id)
            .subscribe(
            agent => this.agent = agent,            
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/agents']);
    }

}
