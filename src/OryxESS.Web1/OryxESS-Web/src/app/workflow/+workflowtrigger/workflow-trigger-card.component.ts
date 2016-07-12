import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {PaginatePipe, PaginationControlsCmp} from 'ng2-pagination';

import { ROUTER_DIRECTIVES } from '@angular/router';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MaterializeDirective} from "angular2-materialize";


@Component({
  moduleId: module.id,
  selector: 'app-workflow-trigger-card',
  templateUrl: 'workflow-trigger-card.component.html',
  styleUrls: ['workflow-trigger-card.component.css'],
  directives: [ ROUTER_DIRECTIVES,PaginationControlsCmp, MD_INPUT_DIRECTIVES, MD_BUTTON_DIRECTIVES,MaterializeDirective],
  pipes: [PaginatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkflowTriggerCardComponent implements OnInit {
  @Input() WFTriggers: any[] = [];
  constructor() {}

  ngOnInit() {
  }

}
