import { Component, OnInit, Input } from '@angular/core';
import { CORE_DIRECTIVES  } from '@angular/common';
import { FORM_DIRECTIVES,NgForm } from '@angular/forms';
import {MaterializeDirective} from "angular2-materialize";
import {IModelBase} from '../shared/imodel-base';
import {IPort, Port} from './port';

@Component({
  moduleId: module.id,
  selector: 'app-ports-create',
  templateUrl: 'ports-create.component.html',
  styleUrls: ['ports-create.component.css']
})
export class PortsCreateComponent implements OnInit {
port: Port;
  formActive: Boolean = false;
  selectedId: number = 0;
  @Input() ports:any[] = [];

  constructor() {}

  ngOnInit() {
     this.port = new Port( );
    this.port.id= 1;
  }

}
