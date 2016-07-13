import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

//3rd Party imports
import {MaterializeDirective} from "angular2-materialize";



@Component({
  moduleId: module.id,
  selector: 'app-app-menu',
  templateUrl: 'app-menu.component.html',
  styleUrls: ['app-menu.component.css'],
   directives: [ROUTER_DIRECTIVES, MaterializeDirective] ,
})
export class AppMenuComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
