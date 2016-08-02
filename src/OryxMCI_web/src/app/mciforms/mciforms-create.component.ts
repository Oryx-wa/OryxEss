import { Component, OnInit, Input } from '@angular/core';
import {IModelBase} from '../shared/imodel-base';

@Component({
  moduleId: module.id,
  selector: 'app-mciforms-create',
  templateUrl: 'mciforms-create.component.html',
  styleUrls: ['mciforms-create.component.css']
})
export class MciFormsCreateComponent implements OnInit {
@Input() mciform: IModelBase;
  formActive: Boolean = false;
  selectedId: number = 0;
  constructor() {}

  ngOnInit() {
  }

}
