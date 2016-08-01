import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CORE_DIRECTIVES } from '@angular/common';
import {MaterializeDirective} from "angular2-materialize";
 import { Router, ActivatedRoute,  ROUTER_DIRECTIVES } from '@angular/router';
 import {MdIcon, MdIconRegistry} from '@angular2-material/icon'; 
 import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
 import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
 import {DisplayModeEnum} from '../shared-enum.enum';
 import { NgForm }    from '@angular/forms';
 import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'app-oryx-toolbar',
  templateUrl: 'oryx-toolbar.component.html',
  styleUrls: ['oryx-toolbar.component.css'],
   directives: [ MaterializeDirective, ROUTER_DIRECTIVES, CORE_DIRECTIVES]  
})
export class OryxToolbarComponent implements OnInit {

  
  @Input() title: string;
  @Input() showSearch: boolean = false;
  @Input() showVert: boolean = false;
  @Input() showCardorGrid: boolean = false;
  @Input() displayMode: DisplayModeEnum;
  @Input() showSeach: boolean= true;
  @Input() showAdd: boolean=false;

  //@Input() displayModeEnum = DisplayModeEnum;
  //Outputs

  @Output() GridOrCard: EventEmitter<any> = new EventEmitter();

  search: boolean = false;
  submitted = false;
     //displayModeEnum = DisplayModeEnum;

  constructor() {}

  ngOnInit() {
  }
  changeDisplayMode(mode: number){
    console.log(mode.toString());
    this.GridOrCard.next(mode);
  }
 displaySearch(){

   this.search = true;
 }
  onSubmit() { this.submitted = true; 

    this.search = true;
  }
  onSearchSubmit() { this.submitted = true; 

      this.search = false;}
  onCloseSearch() { this.submitted = false; 
      this.search = false;}
  
}


