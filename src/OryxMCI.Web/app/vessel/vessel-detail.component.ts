import { Component } from '@angular/core';
import { Router, OnActivate, RouteSegment } from '@angular/router';

import { IVessel } from './vessel';
import { VesselService } from './vessel.service';

@Component({
    templateUrl: 'app/vessel/vessel-detail.component.html'
})
export class VesselDetailComponent implements OnActivate {
    pageTitle: string = 'Vessel Detail';
    vessel: IVessel;
    errorMessage: string;

    constructor(private _vesselService: VesselService,
                private _router: Router) {
    }

    routerOnActivate(curr: RouteSegment): void {
        let id = +curr.getParam('id');
        this.getVessel(id);
    }

    getVessel(id: number) {
        this._vesselService.getVessel(id)
            .subscribe(
            vessel => this.vessel = vessel,            
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/vessels']);
    }

}
