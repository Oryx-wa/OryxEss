import { Component, OnInit }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { IVessel } from './vessel';
import { VesselFilterPipe } from './vessel-filter.pipe';
import { VesselService } from './vessel.service';

@Component({
    templateUrl: 'app/vessel/vessel-list.component.html',
    styleUrls: ['app/vessel/vessel-list.component.css'],
    pipes: [VesselFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})
export class VesselListComponent implements OnInit {
    pageTitle: string = 'Vessel List';
    listvFilter: string = '';
    errorMessage: string;
    vessels: IVessel[];

    constructor(private _vesselService: VesselService) {

    }

    ngOnInit(): void {
           this._vesselService.getVessels()
                     .subscribe(
                       vessels => this.vessels = vessels,
                       error =>  this.errorMessage = <any>error);
    }
}
