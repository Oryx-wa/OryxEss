import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import { AuthGuard }             from '../login/auth.guard';
import {MciFormsListComponent} from './mciforms-list.component';
import {MciFormsCardComponent} from './mciforms-card.component';
import {MciFormsCreateComponent} from './mciforms-create.component';
import {MaterializeDirective} from "angular2-materialize";

import {ServiceBase} from '../shared/service-base';
import {IModelBase} from '../shared/imodel-base';
import {SecurityService} from '../login/security.service';
import {OryxToolbarComponent} from '../shared/toolbar/oryx-toolbar.component';
import {DisplayModeEnum} from '../shared/shared-enum.enum'

@Component({
  moduleId: module.id,
  selector: 'app-mciforms',
  templateUrl: 'mciforms.component.html',
  styleUrls: ['mciforms.component.css'],
  directives: [MD_TOOLBAR_DIRECTIVES, MD_BUTTON_DIRECTIVES, MaterializeDirective,
    MdIcon, ROUTER_DIRECTIVES, MciFormsListComponent, CORE_DIRECTIVES, OryxToolbarComponent, MciFormsCardComponent,
    MciFormsCreateComponent],
  providers: [MdIconRegistry]
})
export class MciFormsComponent implements OnInit {
  title: string = "Mci Forms";
  filterText: string;
  mciforms: IModelBase[] = [];
  mciform: IModelBase;
  //filteredCustomers: ICustomer[] = [];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;
  showVert: boolean = false;
  showSearch: boolean = true;
  showCardorGrid: boolean = true;
  showAdd: boolean = true;
  ports: IModelBase[] = [];
  totalRecordCount: number;
  pageCount: number = 0;
  pageNumber: number = 1;
  pageSize: number = 50;
  orderBy: string = "DateInspected";
  searchString:string;

  constructor(private _MciFormService: ServiceBase, public securityService: SecurityService) { }

  ngOnInit() {
    this._MciFormService.setActionUrl("Mcidata");

    this.displayMode = DisplayModeEnum.Grid;
    this.pageNumber = 1;
    this.getPaged();
    this.getPorts();
  }
  changeDisplayMode(mode: DisplayModeEnum) {
    console.log(mode.toString());
    this.displayMode = mode;
  }

  onSearch(searchString: string){
    console.log(searchString);
    this.searchString = searchString;
    this.search();

  }

  onPageChange(page: any) {
    this.pageCount = this._MciFormService.GetPageCount();
    this.totalRecordCount = this._MciFormService.GetRecordCount();
    
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

  private getData() {
    console.log('mciform :getData starting...');
    this._MciFormService
      .GetAll()
      .subscribe(data => this.mciforms = data,
      error => this.securityService.HandleError(error),
      () => console.log('Get all completed'));
    console.log(this.mciforms.length.toString());
  }

  private getPaged() {
    console.log('mciform :getPager starting...' + this.pageNumber);
    this._MciFormService.setActionUrl("Mcidata/GetPaged");
    this._MciFormService
      .GetPage(this.pageNumber, this.pageSize, this.orderBy)
      .subscribe(data => this.mciforms = data,
      error => this.securityService.HandleError(error),
      () => console.log('Get Paged completed'));    
  }

  private search() {
    console.log('mciform :getPager starting...' + this.pageNumber);
    this._MciFormService.setActionUrl("Mcidata/search");
    this._MciFormService
      .search(this.searchString,this.pageNumber, this.pageSize, this.orderBy)
      .subscribe(data => this.mciforms = data,
      error => this.securityService.HandleError(error),
      () => console.log('Get Paged completed'));    
  }
  
  
  private getPorts() {
    console.log('mciform :Ports starting...');
    this._MciFormService.setActionUrl("Port");
    this._MciFormService
      .GetAll()
      .subscribe(data => this.ports = data,
      error => this.securityService.HandleError(error),

      () => console.log('Get Ports completed'));
    console.log(this.ports.length.toString());
  }

  private getDataById(id: number) {

    console.log('iou :getData starting...');
    this._MciFormService
      .GetById(id)
      .subscribe(data => this.mciform = data,
      error => this.securityService.HandleError(error),
      () => console.log('Get id completed'));
    console.log("id completed successfully");



  }
}

