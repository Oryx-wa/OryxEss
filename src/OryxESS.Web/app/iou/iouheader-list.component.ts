import { Component, OnInit }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { IIouHeader } from './iouheader';
import { iouHeaderService } from './iouheader.service';
import {SecurityService} from '../services/security.service';

@Component({
    templateUrl: 'app/iou/iouheader-list.component.html',
    directives: [ ROUTER_DIRECTIVES]
})
export class IouListComponent implements OnInit {
    pageTitle: string = 'My iou List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    errorMessage: string;
    iouHeaders: IIouHeader[];
    public message: string;


    constructor(private _iouHeaderService: iouHeaderService,
                public securityService: SecurityService
        ) {
            this.message = "IOU Headers";
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit() {
        this.getData();
    }

    public Delete(id: any) {
        console.log("Try to delete" + id);
        this._iouHeaderService.Delete(id)
            .subscribe((() => console.log("subscribed")),
            error => this.securityService.HandleError(error),
            () => this.getData());
    }

    private getData() {
        console.log('iouHeaderListComponent:getData starting...');
        this._iouHeaderService
            .GetAll()
            .subscribe(data => this.iouHeaders = data,
            error => this.securityService.HandleError(error),
            () => console.log('Get all completed'));
    }
   
}
