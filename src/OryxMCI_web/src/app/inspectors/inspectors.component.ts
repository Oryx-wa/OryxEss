import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
 import { Router, ActivatedRoute,  ROUTER_DIRECTIVES } from '@angular/router';
 import {MdIcon, MdIconRegistry} from '@angular2-material/icon'; 
 import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
 import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
 import { AuthGuard }             from '../login/auth.guard';
 import {InspectorsListComponent} from './inspectors-list.component';
 import {InspectorsCardComponent} from './inspectors-card.component';
 import {InspectorsCreateComponent} from './inspectors-create.component';

 import {ServiceBase} from '../shared/service-base';
 import {IModelBase} from '../shared/imodel-base';
 import {SecurityService} from '../login/security.service';
 import {OryxToolbarComponent} from '../shared/toolbar/oryx-toolbar.component';
 import {DisplayModeEnum} from '../shared/shared-enum.enum'

@Component({
  moduleId: module.id,
  selector: 'app-inspectors',
  templateUrl: 'inspectors.component.html',
  styleUrls: ['inspectors.component.css'],
   directives: [MD_TOOLBAR_DIRECTIVES, MD_BUTTON_DIRECTIVES, 
   MdIcon, ROUTER_DIRECTIVES, InspectorsListComponent, CORE_DIRECTIVES, OryxToolbarComponent,InspectorsCardComponent,
   InspectorsCreateComponent],
    providers: [MdIconRegistry]
})
export class InspectorsComponent implements OnInit {
    title: string = "Inspectors";
    filterText: string;
    inspectors: IModelBase[] = [];
    inspector: IModelBase;
    //filteredCustomers: ICustomer[] = [];
    displayMode: DisplayModeEnum;
    displayModeEnum = DisplayModeEnum;
    showVert: boolean = true;
    showSearch: boolean = true;
    showCardorGrid: boolean = true;
    showAdd: boolean = true;
  constructor(private _InspectorService: ServiceBase, public securityService: SecurityService) {}

  ngOnInit() {
    this._InspectorService.setActionUrl('inspector.json');
      
    this.displayMode = DisplayModeEnum.Grid;
    this.getData();
  }
changeDisplayMode(mode: DisplayModeEnum) {
  console.log(mode.toString());
  this.displayMode = mode;
}
  
   
    private getData() {
        console.log('inspector :getData starting...');
        this._InspectorService
            .GetAll()
            .subscribe(data => this.inspectors = data,
            error => this.securityService.HandleError(error),
            () => console.log('Get all completed'));
          console.log(this.inspectors.length.toString());
    }

     private getDataById(id: number) {
        
           console.log('iou :getData starting...');
          this._InspectorService
            .GetById(id)
            .subscribe(data => this.inspector = data,
            error => this.securityService.HandleError(error),
            () => console.log('Get id completed'));           
          console.log("id completed successfully");
        
  

}
}

