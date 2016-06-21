import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router,   ROUTER_DIRECTIVES } from '@angular/router';
import { SecurityService } from '../services/Security.Service';

import { iouHeaderService } from '../iou/iouheader.service';
import { IIouHeader } from './iouheader';

@Component({
    selector: 'iouheader-edit',
    templateUrl: 'app/iou/iouheader-edit.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class IouEditComponent implements OnInit {

    private id: number;
    public message: string;
    public iouHeader:  IIouHeader;
    private sub: any;

    constructor(
        private _iouHeaderService: iouHeaderService,
        public securityService: SecurityService,
       // private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.message = "DataEventRecords Edit";
        //this.id = +this._routeParams.get('id');
    }
    
    ngOnInit() {     
        console.log("IsAuthorized:" + this.securityService.IsAuthorized);
        console.log("HasAdminRole:" + this.securityService.HasAdminRole);
        //let id = +this._routeParams.get('id');
    
        

     
  
    }

   
    
}
