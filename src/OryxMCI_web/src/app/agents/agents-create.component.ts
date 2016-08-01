import { Component, OnInit, Input } from '@angular/core';
import {IModelBase} from '../shared/imodel-base';

@Component({
  moduleId: module.id,
  selector: 'app-agents-create',
  templateUrl: 'agents-create.component.html',
  styleUrls: ['agents-create.component.css']
})
export class AgentsCreateComponent implements OnInit {
  @Input() agent: IModelBase;
  formActive: Boolean = false;
  selectedId: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
