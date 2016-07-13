import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

//3rd Party imports
import {MaterializeDirective} from "angular2-materialize";

@Component({
  moduleId: module.id,
  selector: 'app-iou-menu',
  templateUrl: 'iou-menu.component.html',
  styleUrls: ['iou-menu.component.css'],
  directives:[ROUTER_DIRECTIVES, MaterializeDirective]
})
export class IouMenuComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
