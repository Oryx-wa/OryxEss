import { Component, OnInit, Input } from '@angular/core';
import { CORE_DIRECTIVES  } from '@angular/common';
import { FORM_DIRECTIVES,NgForm } from '@angular/forms';
import {MaterializeDirective} from "angular2-materialize";
import {IModelBase} from '../shared/imodel-base';
import {IVessel, Vessel} from './vessel';
@Component({
  moduleId: module.id,
  selector: 'app-vessels-create',
  templateUrl: 'vessels-create.component.html',
  styleUrls: ['vessels-create.component.css'],
  directives:[CORE_DIRECTIVES,FORM_DIRECTIVES ,MaterializeDirective]
})
export class VesselsCreateComponent implements OnInit {
vessel: Vessel;
  formActive: Boolean = false;
  selectedId: number = 0;
  @Input() ports:any[] = [];

  constructor() {}

  ngOnInit() {
     this.vessel = new Vessel( );
    this.vessel.id= 1;
  }

}
