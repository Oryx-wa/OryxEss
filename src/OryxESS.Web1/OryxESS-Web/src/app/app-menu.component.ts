import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

//3rd Party imports
import {MaterializeDirective} from "angular2-materialize";

//import menus 
import {WorkflowMenuComponent} from './workflow/menu/workflow-menu.component';
import {IouMenuComponent} from './iou/menu/iou-menu.component'



@Component({
  moduleId: module.id,
  selector: 'app-app-menu',
  templateUrl: 'app-menu.component.html',
  styleUrls: ['app-menu.component.css'],
   directives: [ROUTER_DIRECTIVES, MaterializeDirective,
     WorkflowMenuComponent, IouMenuComponent] ,
})
export class AppMenuComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
