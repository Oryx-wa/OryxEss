import { Component, OnInit, Input } from '@angular/core';
import { CORE_DIRECTIVES  } from '@angular/common';
import { FORM_DIRECTIVES,NgForm } from '@angular/forms';
import {MaterializeDirective} from "angular2-materialize"
import {IModelBase} from '../shared/imodel-base';
import {IAgent, Agent} from './agent'
@Component({
  moduleId: module.id,
  selector: 'app-agents-create',
  templateUrl: 'agents-create.component.html',
  styleUrls: ['agents-create.component.css']
})
export class AgentsCreateComponent implements OnInit {
    agents: Agent;
  @Input() agent:any[] = [];
  formActive: Boolean = false;
  selectedId: number = 0;
  constructor() { }

  ngOnInit() {
 this.agents = new Agent( );
    this.agents.id= 1;
  }

}
