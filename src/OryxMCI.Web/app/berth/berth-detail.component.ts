import { Component } from '@angular/core';
import { Router, OnActivate, RouteSegment } from '@angular/router';

import { IBerth } from './berth';
import { BerthService } from './berth.service';

@Component({
    templateUrl: 'app/berth/berth-detail.component.html'
})
export class BerthDetailComponent implements OnActivate {
    pageTitle: string = 'berth Detail';
    berth: IBerth;
    errorMessage: string;

    constructor(private _berthService: BerthService,
                private _router: Router) {
    }

    routerOnActivate(curr: RouteSegment): void {
        let id = +curr.getParam('id');
        this.getberth(id);
    }

    getberth(id: number) {
        this._berthService.getBerth(id)
            .subscribe(
            berth => this.berth = berth,            
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/berths']);
    }

}
