import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Agent, IAgent }    from './agent';

import {AgentService} from './agent.service';
import {ROUTER_PROVIDERS, Router, Routes, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'agent-form',
  templateUrl: 'app/agents/add-agent-form.component.html',
  styleUrls: ['app/agents/agent-form.css']
})



export class AddAgentFormComponent implements OnInit {
  active: Boolean = true;
  errorMessage: string;

  agents: IAgent[];
  model = new Agent(0, null, null);
  submitted = false;

  constructor(private _router: Router, private _agentService: AgentService) { }

  ngOnInit(): void {
    this._agentService.getagents()
      .subscribe(
      agents => this.agents = agents,
      error => this.errorMessage = <any>error);
  }

  //addAgent (newAgent) {
  //  if (!newAgent) { return; }
  //this._agentService.addAgent(this.newAgent)
  //               .subscribe(
  //               agents  => this.agents.push(agents),
  //             error =>  this.errorMessage = <any>error);
  //}



  onSubmit() {

    this.submitted = true;
    // this._router.navigate(['/agents']);
  }

  //onSave() {
  //    this._agentService.addAnAgent(('/agents', JSON.stringify(this.newAgent)));
  //}
  onSave() {
    this._agentService.addAnAgent(this.newAgent);
  }

  newAgent() {
    this.model = new Agent(0, null, null);
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }


}

@Component({
  selector: 'edit-agent-form',
  templateUrl: 'app/agents/edit-agent-form.component.html',
  styleUrls: ['app/agents/edit-agent-form.css']
})

export class EditAgentFormComponent implements OnInit {
  active: Boolean = true;
  errorMessage: string;

   agents: IAgent[]
  model = new Agent(0, null, null);

  submitted = false;

  constructor(private _router: Router, private _agentService: AgentService) {

  }
  ngOnInit(): void {
    this._agentService.getagents()
      .subscribe(
      agents => this.agents = agents,
      error => this.errorMessage = <any>error);
  }

 
  onSubmit() {

    this.submitted = true;
    // this._router.navigate(['/agents']);
  }



  newAgent() {
    this.model = new Agent(0, null, null);
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }


}