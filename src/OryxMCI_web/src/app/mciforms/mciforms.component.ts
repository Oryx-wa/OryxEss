import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
 import { Router, ActivatedRoute,  ROUTER_DIRECTIVES } from '@angular/router';
 import {MdIcon, MdIconRegistry} from '@angular2-material/icon'; 
 import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
 import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
 import { AuthGuard }             from '../login/auth.guard';
 import {MciFormsListComponent} from './mciforms-list.component';
 import {MciFormsCardComponent} from './mciforms-card.component';
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
   MdIcon, ROUTER_DIRECTIVES, MciFormsListComponent, CORE_DIRECTIVES, OryxToolbarComponent,MciFormsCardComponent],
    providers: [MdIconRegistry]
})
export class MciFormsComponent implements OnInit {
    title: string = "MciForms";
    filterText: string;
    mciforms: IModelBase[] = [];
    mciform: IModelBase;
    //filteredCustomers: ICustomer[] = [];
    displayMode: DisplayModeEnum;
    displayModeEnum = DisplayModeEnum;
    showVert: boolean = true;
    showSearch: boolean = true;
    showCardorGrid: boolean = true;
  constructor(private _MciFormService: ServiceBase, public securityService: SecurityService) {}

  ngOnInit() {
    this._MciFormService.setActionUrl("MciForm.json");
      
    this.displayMode = DisplayModeEnum.Grid;
    this.getData();
  }
changeDisplayMode(mode: DisplayModeEnum) {
  console.log(mode.toString());
  this.displayMode = mode;
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

