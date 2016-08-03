import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import { AuthGuard }             from '../login/auth.guard';
import {AgentsListComponent} from './agents-list.component';
import {AgentsCardComponent} from './agents-card.component';
import {AgentsCreateComponent} from './agents-create.component';
import {MaterializeDirective} from "angular2-materialize";

import {ServiceBase} from '../shared/service-base';
import {IModelBase} from '../shared/imodel-base';
import {SecurityService} from '../login/security.service';
import {OryxToolbarComponent} from '../shared/toolbar/oryx-toolbar.component';
import {DisplayModeEnum} from '../shared/shared-enum.enum'

@Component({
  moduleId: module.id,
  selector: 'app-agents',
  templateUrl: 'agents.component.html',
  styleUrls: ['agents.component.css'],
  directives: [MD_TOOLBAR_DIRECTIVES, MD_BUTTON_DIRECTIVES, MaterializeDirective,AgentsCreateComponent,
    MdIcon, ROUTER_DIRECTIVES, AgentsListComponent, CORE_DIRECTIVES, OryxToolbarComponent, AgentsCardComponent],
  providers: [MdIconRegistry]
})
export class AgentsComponent implements OnInit {
  title: string = "Agents";
  filterText: string;
  agents: IModelBase[] = [];
  agent: IModelBase;
  //filteredCustomers: ICustomer[] = [];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;
  showVert: boolean = true;
  showSearch: boolean = true;
  showCardorGrid: boolean = true;
  showAdd: boolean = true;
  ports: IModelBase[] = [];
  totalRecordCount: number;
  pageCount: number = 0;
  pageNumber: number = 1;
  pageSize: number = 50;
  orderBy: string = "DateInspected";
  constructor(private _AgentService: ServiceBase, public securityService: SecurityService) { }

  ngOnInit() {
    this._AgentService.setActionUrl("Agent.json");

    this.displayMode = DisplayModeEnum.Grid;
        this.getData();
   this.pageNumber = 1;
    this.getPaged();
    this.getPorts();
  }
  changeDisplayMode(mode: DisplayModeEnum) {
    console.log(mode.toString());
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
  private getPaged() {
    console.log('agentform :getPager starting...' + this.pageNumber);
    this._AgentService.setActionUrl("agent/GetPaged");
    this._AgentService
      .GetPage(this.pageNumber, this.pageSize, this.orderBy)
      .subscribe(data => this.agents = data,
      error => this.securityService.HandleError(error),
      () => console.log('Get Paged completed'));    
  }
  
  private getPorts() {
    console.log('agentform :Ports starting...');
    this._AgentService.setActionUrl("Port");
    this._AgentService
      .GetAll()
      .subscribe(data => this.ports = data,
      error => this.securityService.HandleError(error),

      () => console.log('Get Ports completed'));
    console.log(this.ports.length.toString());
  }

   onSearch(searchString: string){
    console.log(searchString);
  }
  onPageChange(page: any) {
    this.pageCount = this._AgentService.GetPageCount();
    this.totalRecordCount = this._AgentService.GetRecordCount();
    
    //console.log(this.pageCount);
    
    if (this.pageCount > page.page && this.pageCount > 1) {
      if (page.more) {        
       
        this.pageNumber += 1;
      }
      else {
        this.pageNumber-=1;
      }
      this.getPaged();
    }

  }


}