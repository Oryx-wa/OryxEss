import { Component } from 'angular2/core';
import { NgForm }    from 'angular2/common';
import { Agent }    from './agent';
import {AgentService} from './agent-form.service'

@Component({
  selector: 'agent-form',
  templateUrl: 'app/agents/agent-form.component.html',
  directives:[NgForm],
})
 
 
export class AgentFormComponent {
 agents : Agent[]
 model = new Agent(0,' ', ' ', true);
  submitted = false;
  onSubmit() { this.submitted = true; }
  active = true;
 


  constructor(private agentService: AgentService) {
    agentService.getAllAgent()
      .map(agents => agents.json())
      .subscribe(a => {
        this.agents = a;
      });
  }


}
