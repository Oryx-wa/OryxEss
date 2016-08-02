import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
 import { Router, ActivatedRoute,  ROUTER_DIRECTIVES } from '@angular/router';
 import {MdIcon, MdIconRegistry} from '@angular2-material/icon'; 
 import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
 import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
 import { AuthGuard }             from '../login/auth.guard';
 import {PortsListComponent} from './ports-list.component';
 import {PortsCardComponent} from './ports-card.component';
 import {PortsCreateComponent} from './ports-create.component'

 import {ServiceBase} from '../shared/service-base';
 import {IModelBase} from '../shared/imodel-base';
 import {SecurityService} from '../login/security.service';
 import {OryxToolbarComponent} from '../shared/toolbar/oryx-toolbar.component';
 import {DisplayModeEnum} from '../shared/shared-enum.enum'

@Component({
  moduleId: module.id,
  selector: 'app-ports',
  templateUrl: 'ports.component.html',
  styleUrls: ['ports.component.css'],
   directives: [MD_TOOLBAR_DIRECTIVES, MD_BUTTON_DIRECTIVES, 
   MdIcon, ROUTER_DIRECTIVES, PortsListComponent, CORE_DIRECTIVES, OryxToolbarComponent,PortsCardComponent,
   PortsCreateComponent],
    providers: [MdIconRegistry]
})
export class PortsComponent implements OnInit {
    title: string = "Ports";
    filterText: string;
    ports: IModelBase[] = [];
    port: IModelBase;
    //filteredCustomers: ICustomer[] = [];
    displayMode: DisplayModeEnum;
    displayModeEnum = DisplayModeEnum;
    showVert: boolean = true;
    showSearch: boolean = true;
    showCardorGrid: boolean = true;
    showAdd: boolean = true;
  constructor(private _PortService: ServiceBase, public securityService: SecurityService) {}

  ngOnInit() {
    this._PortService.setActionUrl("Port.json");
      
    this.displayMode = DisplayModeEnum.Grid;
    this.getData();
  }
changeDisplayMode(mode: DisplayModeEnum) {
  console.log(mode.toString());
  this.displayMode = mode;
}
  
   
    private getData() {
        console.log('port :getData starting...');
        this._PortService
            .GetAll()
            .subscribe(data => this.ports = data,
            error => this.securityService.HandleError(error),
            () => console.log('Get all completed'));
          console.log(this.ports.length.toString());
    }

     private getDataById(id: number) {
        
           console.log('iou :getData starting...');
          this._PortService
            .GetById(id)
            .subscribe(data => this.port = data,
            error => this.securityService.HandleError(error),
            () => console.log('Get id completed'));           
          console.log("id completed successfully");
        
  

}
}

