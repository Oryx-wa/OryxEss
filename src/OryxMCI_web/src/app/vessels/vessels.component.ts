import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
 import { Router, ActivatedRoute,  ROUTER_DIRECTIVES } from '@angular/router';
 import {MdIcon, MdIconRegistry} from '@angular2-material/icon'; 
 import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
 import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
 import { AuthGuard }             from '../login/auth.guard';
 import {VesselsListComponent} from './vessels-list.component';
 import {VesselsCardComponent} from './vessels-card.component';
 import {VesselsCreateComponent} from './vessels-create.component';
 

 import {ServiceBase} from '../shared/service-base';
 import {IModelBase} from '../shared/imodel-base';
 import {SecurityService} from '../login/security.service';
 import {OryxToolbarComponent} from '../shared/toolbar/oryx-toolbar.component';
 import {DisplayModeEnum} from '../shared/shared-enum.enum'

@Component({
  moduleId: module.id,
  selector: 'app-vessels',
  templateUrl: 'vessels.component.html',
  styleUrls: ['vessels.component.css'],
   directives: [MD_TOOLBAR_DIRECTIVES, MD_BUTTON_DIRECTIVES, 
   MdIcon, ROUTER_DIRECTIVES,VesselsListComponent, CORE_DIRECTIVES, OryxToolbarComponent,VesselsCardComponent,
   VesselsCreateComponent],
    providers: [MdIconRegistry]
})
export class VesselsComponent implements OnInit {
    title: string = "Vessels";
    filterText: string;
    vessels: IModelBase[] = [];
    vessel: IModelBase;
    //filteredCustomers: ICustomer[] = [];
    displayMode: DisplayModeEnum;
    displayModeEnum = DisplayModeEnum;
    showVert: boolean = true;
    showSearch: boolean = true;
    showCardorGrid: boolean = true;
    showAdd: boolean = true;
  constructor(private _VesselService: ServiceBase, public securityService: SecurityService) {}

  ngOnInit() {
    this._VesselService.setActionUrl("Vessel.json");
      
    this.displayMode = DisplayModeEnum.Grid;
    this.getData();
  }
changeDisplayMode(mode: DisplayModeEnum) {
  console.log(mode.toString());
  this.displayMode = mode;
}
  
   
    private getData() {
        console.log('vessel :getData starting...');
        this._VesselService
            .GetAll()
            .subscribe(data => this.vessels = data,
            error => this.securityService.HandleError(error),
            () => console.log('Get all completed'));
          console.log(this.vessels.length.toString());
    }

     private getDataById(id: number) {
        
           console.log('iou :getData starting...');
          this._VesselService
            .GetById(id)
            .subscribe(data => this.vessel = data,
            error => this.securityService.HandleError(error),
            () => console.log('Get id completed'));           
          console.log("id completed successfully");
        
  

}
}

