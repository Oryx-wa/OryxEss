import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  selector: 'app-mciforms-list',
  templateUrl: 'mciforms-list.component.html',
  styleUrls: ['mciforms-list.component.css'],
  directives: [MD_TOOLBAR_DIRECTIVES, MD_BUTTON_DIRECTIVES,CORE_DIRECTIVES, PaginationControlsCmp, MaterializeDirective,
  MdIcon, ROUTER_DIRECTIVES, FORM_DIRECTIVES ],
    providers: [MdIconRegistry],
    pipes: [PaginatePipe]
    
})
export class MciFormsListComponent implements OnInit {
  @Input() mciforms: any[] = [];
  @Input() pageNumber:number;
  mciform: IModelBase;
  formActive:Boolean = false;

  @Output() PageChange: EventEmitter<any> = new EventEmitter();
  constructor() {};


  ngOnInit() {
  }

  showForm(id:number){
     this.mciform = this.mciforms.find(t => t.id == id);
    this.formActive = true;
    console.log(id);
    
  }

  onPageChange ( more:boolean){
    console.log(this.pageNumber);
    this.PageChange.next({page:this.pageNumber, more:more});
  }

 
  saveData(){
    console.log(JSON.stringify(this.mciform));
  }

}
