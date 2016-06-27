import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute,  ROUTER_DIRECTIVES } from '@angular/router';

import { CORE_DIRECTIVES } from '@angular/common';
//import {SecurityService} from '../services/security.service';
import { IouService } from '../shared/iou.service';
import { AuthGuard }             from '../../login/auth.guard';
import { IouHeader } from '../models/iou-header';

import {SecurityService} from '../../login/security.service';
import {IousCardComponent} from './ious-card.component';
import {IousListComponent} from './ious-list.component';

@Component({
  moduleId: module.id,
  selector: 'ious',
  templateUrl: 'ious.component.html',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES,
              IousCardComponent, IousListComponent],
  
  
})

export class IousComponent implements OnInit {

    title: string;
    filterText: string;
    public iouHeaders: IouHeader[] = [];
    //filteredCustomers: ICustomer[] = [];
    displayMode: DisplayModeEnum;
    displayModeEnum = DisplayModeEnum;
  
   
     constructor(private _iouHeaderService: IouService,
     public securityService: SecurityService        ) { }

    ngOnInit() {

      this.title = 'My IOUS';
      
      this.displayMode = DisplayModeEnum.Card;
      this.getData();
    }

   
    private getData() {
        console.log('iou :getData starting...');
        this._iouHeaderService
            .GetAll()
            .subscribe(data => this.iouHeaders = data,
            error => this.securityService.HandleError(error),
            () => console.log('Get all completed'));
          console.log(this.iouHeaders.length.toString());
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
