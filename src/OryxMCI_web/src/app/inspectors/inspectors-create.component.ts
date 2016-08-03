import { Component, OnInit, Input } from '@angular/core';
import { CORE_DIRECTIVES  } from '@angular/common';
import { FORM_DIRECTIVES,NgForm } from '@angular/forms';
import {MaterializeDirective} from "angular2-materialize";
import {IModelBase} from '../shared/imodel-base';
import {IInspector, Inspector} from './inspector';

@Component({
  moduleId: module.id,
  selector: 'app-inspectors-create',
  templateUrl: 'inspectors-create.component.html',
  styleUrls: ['inspectors-create.component.css'],
    directives:[CORE_DIRECTIVES,FORM_DIRECTIVES ,MaterializeDirective]
})
export class InspectorsCreateComponent implements OnInit {
inspector: Inspector;
  formActive: Boolean = false;
  selectedId: number = 0;
  @Input() ports:any[] = [];
  constructor() {}

   ngOnInit() {
    
  }


}
