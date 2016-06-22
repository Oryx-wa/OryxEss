import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Agent }    from './agent';
import {AgentService} from './agent.service'

@Component({
  selector: 'agent-form',
  templateUrl: 'app/agents/agent-form.component.html'
})
 
 
export class AgentFormComponent {
 agents : Agent[]
 model = new Agent(0,' ', ' ');
  submitted = false;
  
  onSubmit() { this.submitted = true; }
  active = true;

  constructor(private _agentService: AgentService) {
    
  }


}
