import { Component, OnInit, Input } from '@angular/core';
import { CORE_DIRECTIVES  } from '@angular/common';
import { FORM_DIRECTIVES,NgForm } from '@angular/forms';
import {MaterializeDirective} from "angular2-materialize";
import {IModelBase} from '../shared/imodel-base';
import {IMciForm, MciForm} from './mciform'


@Component({
  moduleId: module.id,
  selector: 'app-mciforms-create',
  templateUrl: 'mciforms-create.component.html',
  styleUrls: ['mciforms-create.component.css'],
  directives:[CORE_DIRECTIVES,FORM_DIRECTIVES ,MaterializeDirective]
})
export class MciFormsCreateComponent implements OnInit {
  mciform: MciForm;
  formActive: Boolean = false;
  selectedId: number = 0;
  @Input() ports:any[] = [];

  constructor() {}


  ngOnInit() {

    this.mciform = new MciForm( );
    this.mciform.id= 1;
    this.mciform.port = "P001";
  }

}
