import { Component, OnInit, Input } from '@angular/core';
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
  @Input() agent: IModelBase;
  formActive: Boolean = false;
  selectedId: number = 0;
  constructor() { }

  ngOnInit() {
 
  }

}
