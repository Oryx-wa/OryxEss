import { Component, OnInit } from '@angular/core';
//3rd Party imports
//import {MaterializeDirective} from "angular2-materialize";
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [MATERIAL_DIRECTIVES],
providers : [MATERIAL_PROVIDERS]
})
export class HomeComponent implements OnInit {
  public pageTitle: string = "Welcome";
  constructor() {}

  ngOnInit() {
  }

}
