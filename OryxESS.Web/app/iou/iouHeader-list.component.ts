import { Component, OnInit }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { IIouHeader } from './iouHeader';
//import { ProductFilterPipe } from './product-filter.pipe';
//import { StarComponent } from '../shared/star.component';
import { iouHeaderService } from './iouHeader.service';

@Component({
    templateUrl: 'app/iou/iouheader.component.html',
    directives: [ ROUTER_DIRECTIVES]
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'My iou List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    errorMessage: string;
    iouHeaders: IIouHeader[];


    constructor(private _iouHeaderService: iouHeaderService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._iouHeaderService.getIous()
            .subscribe(
            iouHeaders => this.iouHeaders = iouHeaders,
            error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'iou List: ' + message;
    }
}
