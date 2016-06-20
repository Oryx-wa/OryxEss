import { Component, OnInit }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { IBerth } from './berth';
import { BerthFilterPipe } from './berth-filter.pipe';
import { BerthService } from './berth.service';

@Component({
    templateUrl: 'app/berth/berth-list.component.html',
    styleUrls: ['app/berth/berth-list.component.css'],
    pipes: [BerthFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})
export class BerthListComponent implements OnInit {
    pageTitle: string = 'Berth List';
    listvFilter: string = '';
    errorMessage: string;
    berths: IBerth[];

    constructor(private _berthService: BerthService) {

    }

    ngOnInit(): void {
           this._berthService.getBerths()
                     .subscribe(
                       berths => this.berths = berths,
                       error =>  this.errorMessage = <any>error);
    }
}
