//Angular imports
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,  ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES } from '@angular/common';
import { AuthGuard }             from '../../login/auth.guard';

//3rd Party imports
import {MaterializeDirective} from "angular2-materialize";

//Application imports
import {CardDisplayModeEnum} from '../../shared/shared-enum.enum';
import {ServiceBase} from '../../shared/service-base';
import {IModelBase} from '../../shared/imodel-base';
import {SecurityService} from '../../login/security.service';
import {WorkflowTriggerListComponent} from './workflow-trigger-list.component'
import {WorkflowTriggerCardComponent} from './workflow-trigger-card.component'



@Component({
  moduleId: module.id,
  selector: 'app-workflow-trigger',
  templateUrl: 'workflow-trigger.component.html',
  styleUrls: ['workflow-trigger.component.css'],
   directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES,WorkflowTriggerListComponent, WorkflowTriggerCardComponent,
    MaterializeDirective]
})
export class WorkflowTriggerComponent implements OnInit {
  title: string;
  filterText: string;
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;
  wfTriggers:IModelBase[] = [];


   constructor(private _Service: ServiceBase,
     public securityService: SecurityService        ) { }


  ngOnInit() {
    this.title = "Workflow Trigger"
    this.displayMode = DisplayModeEnum.Grid;
    this._Service.setActionUrl('WFTriggers');
    this.getData();
  }

  private getData() {
        console.log('Triggers :getData starting...');
        this._Service
            .GetAll()
            .subscribe(data => this.wfTriggers = data,
            error => this.securityService.HandleError(error),
            () => console.log('Get all completed'));
          console.log(this.wfTriggers.length.toString());
    }
    changeDisplayMode(mode: DisplayModeEnum) {
      this.displayMode = mode;
    }

}

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2
}

