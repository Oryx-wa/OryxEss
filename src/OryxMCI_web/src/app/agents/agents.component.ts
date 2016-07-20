import { Component, OnInit } from '@angular/core';
 import {MdIcon, MdIconRegistry} from '@angular2-material/icon'; 
 import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
 import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-agents',
  templateUrl: 'agents.component.html',
  styleUrls: ['agents.component.css'],
   directives: [MD_TOOLBAR_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdIcon],
    providers: [MdIconRegistry]
})
export class AgentsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
