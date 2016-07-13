import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

//3rd Party imports
import {MaterializeDirective} from "angular2-materialize";

@Component({
  moduleId: module.id,
  selector: 'app-workflow-menu',
  templateUrl: 'workflow-menu.component.html',
  styleUrls: ['workflow-menu.component.css'],
  directives:[ROUTER_DIRECTIVES, MaterializeDirective]
})
export class WorkflowMenuComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
