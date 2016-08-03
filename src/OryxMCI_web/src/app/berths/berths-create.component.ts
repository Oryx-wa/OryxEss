import { Component, OnInit, Input } from '@angular/core';
import { CORE_DIRECTIVES  } from '@angular/common';
import { FORM_DIRECTIVES,NgForm } from '@angular/forms';
import {MaterializeDirective} from "angular2-materialize";
import {IModelBase} from '../shared/imodel-base';
import {IBerth, Berth} from './berth';

@Component({
  moduleId: module.id,
  selector: 'app-berths-create',
  templateUrl: 'berths-create.component.html',
  styleUrls: ['berths-create.component.css']
})
export class BerthsCreateComponent implements OnInit {
berth: Berth;
  formActive: Boolean = false;
  selectedId: number = 0;
  @Input() berths:any[] = [];

  constructor() {}

  ngOnInit() {
     this.berth = new Berth( );
    this.berth.id= 1;
  }

}
