import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';


import { IIouHeader } from './iouheader';
import { iouHeaderService } from './iouheader.service';
import {SecurityService} from '../services/security.service';

@Component({
    templateUrl: 'app/iou/iouheader-list.component.html',
    directives: [ ROUTER_DIRECTIVES]
})

export /**
 *  IouCreateComponent
 */

class  IouCreateComponent {
    public iouHeaders: any;
    public message: string;

    constructor(private _iouHeaderService: iouHeaderService,
                public securityService: SecurityService,
                private _router: Router) {
        this.message = "IOU Create";
    }
    ngOnInit() {
        this.iouHeaders = { Id: 0, Name: "", Description: "" };
        console.log("IsAuthorized:" + this.securityService.IsAuthorized);
        console.log("HasAdminRole:" + this.securityService.HasAdminRole);
    }

    public Create() {
        this._iouHeaderService
            .Add(this.iouHeaders)
            .subscribe((data: any) => this.iouHeaders = data,
            error => this.securityService.HandleError(error),
            () => this._router.navigate(['/']));
    }

}