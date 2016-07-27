import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
 import { Router, ActivatedRoute,  ROUTER_DIRECTIVES } from '@angular/router';
 import {MdIcon, MdIconRegistry} from '@angular2-material/icon'; 
 import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
 import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
 import { AuthGuard }             from '../login/auth.guard';
 import {BerthsListComponent} from './berths-list.component';
 import {BerthsCardComponent} from './berths-card.component';

 import {ServiceBase} from '../shared/service-base';
 import {IModelBase} from '../shared/imodel-base';
 import {SecurityService} from '../login/security.service';
 import {OryxToolbarComponent} from '../shared/toolbar/oryx-toolbar.component';
 import {DisplayModeEnum} from '../shared/shared-enum.enum'

@Component({
  moduleId: module.id,
  selector: 'app-berths',
  templateUrl: 'berths.component.html',
  styleUrls: ['berths.component.css'],
   directives: [MD_TOOLBAR_DIRECTIVES, MD_BUTTON_DIRECTIVES, 
   MdIcon, ROUTER_DIRECTIVES, BerthsListComponent, CORE_DIRECTIVES, OryxToolbarComponent,BerthsCardComponent],
    providers: [MdIconRegistry]
})
export class BerthsComponent implements OnInit {
    title: string = "Berths";
    filterText: string;
    berths: IModelBase[] = [];
    berth: IModelBase;
    //filteredCustomers: ICustomer[] = [];
    displayMode: DisplayModeEnum;
    displayModeEnum = DisplayModeEnum;
    showVert: boolean = true;
    showSearch: boolean = true;
    showCardorGrid: boolean = true;
  constructor(private _BerthService: ServiceBase, public securityService: SecurityService) {}

  ngOnInit() {
    this._BerthService.setActionUrl("Berth.json");
      
    this.displayMode = DisplayModeEnum.Grid;
    this.getData();
  }
changeDisplayMode(mode: DisplayModeEnum) {
  console.log(mode.toString());
  this.displayMode = mode;
}
  
   
    private getData() {
        console.log('berth :getData starting...');
        this._BerthService
            .GetAll()
            .subscribe(data => this.berths = data,
            error => this.securityService.HandleError(error),
            () => console.log('Get all completed'));
          console.log(this.berths.length.toString());
    }

     private getDataById(id: number) {
        
           console.log('iou :getData starting...');
          this._BerthService
            .GetById(id)
            .subscribe(data => this.berth = data,
            error => this.securityService.HandleError(error),
            () => console.log('Get id completed'));           
          console.log("id completed successfully");
        
  

}
}

