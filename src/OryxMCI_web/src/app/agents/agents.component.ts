import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import { AuthGuard }             from '../login/auth.guard';
import {AgentsListComponent} from './agents-list.component';

import {ServiceBase} from '../shared/service-base';
import {IModelBase} from '../shared/imodel-base';
import {SecurityService} from '../login/security.service';

@Component({
  moduleId: module.id,
  selector: 'app-agents',
  templateUrl: 'agents.component.html',
  styleUrls: ['agents.component.css'],
  directives: [MD_TOOLBAR_DIRECTIVES, MD_BUTTON_DIRECTIVES,
    MdIcon, ROUTER_DIRECTIVES, AgentsListComponent, CORE_DIRECTIVES],
  providers: [MdIconRegistry]
})
export class AgentsComponent implements OnInit {
  title: string;
  filterText: string;
  agents: IModelBase[] = [];
  agent: IModelBase;
  //filteredCustomers: ICustomer[] = [];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;
  constructor(private _AgentService: ServiceBase, public securityService: SecurityService) { }

  ngOnInit() {
    this._AgentService.setActionUrl('agent');

    this.displayMode = DisplayModeEnum.Grid;
    this.getData();
  }
  changeDisplayMode(mode: DisplayModeEnum) {
    switch (mode) {
      case DisplayModeEnum.Details:
        this.getDataById(1);
        break;

      default:
        break;
    }
    this.displayMode = mode;
  }

  private getData() {
    console.log('agent :getData starting...');
    this._AgentService
      .GetAll()
      .subscribe(data => this.agents = data,
      error => this.securityService.HandleError(error),
      () => console.log('Get all completed'));
    console.log(this.agents.length.toString());
  }

  private getDataById(id: number) {

    console.log('iou :getData starting...');
    this._AgentService
      .GetById(id)
      .subscribe(data => this.agent = data,
      error => this.securityService.HandleError(error),
      () => console.log('Get id completed'));
    console.log("id completed successfully");
  }
}
}

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2,
  Edit = 3,
  Details = 4,
  Create = 5,
}
