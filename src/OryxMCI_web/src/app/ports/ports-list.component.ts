import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute,  ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES } from '@angular/common';
import { FORM_DIRECTIVES,NgForm } from '@angular/forms';

import {MdIcon, MdIconRegistry} from '@angular2-material/icon'; 
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import { AuthGuard }             from '../login/auth.guard';
import {MaterializeDirective} from "angular2-materialize";
import {PaginatePipe, PaginationControlsCmp} from 'ng2-pagination';
import {ServiceBase} from '../shared/service-base';
 import {IModelBase} from '../shared/imodel-base';



@Component({
  moduleId: module.id,
  selector: 'app-ports-list',
  templateUrl: 'ports-list.component.html',
  styleUrls: ['ports-list.component.css'],
  directives: [MD_TOOLBAR_DIRECTIVES, MD_BUTTON_DIRECTIVES,CORE_DIRECTIVES, PaginationControlsCmp, MaterializeDirective,
  MdIcon, ROUTER_DIRECTIVES, FORM_DIRECTIVES ],
    providers: [MdIconRegistry],
    pipes: [PaginatePipe],
})
export class PortsListComponent implements OnInit {

  @Input() ports: any[] = [];
  port: IModelBase;
  formActive:Boolean = false;
  constructor() {};


  ngOnInit() {
  }

  showForm(id:number){
     this.port = this.ports.find(t => t.id == id);
    this.formActive = true;
    console.log(id);
    
  }

  saveData(){
    console.log(JSON.stringify(this.port));
  }

}
