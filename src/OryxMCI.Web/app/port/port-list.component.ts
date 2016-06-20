import { Component, OnInit }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { IPort } from './port';
import { PortFilterPipe } from './port-filter.pipe';
import { PortService } from './port.service';

@Component({
    templateUrl: 'app/port/port-list.component.html',
    styleUrls: ['app/port/port-list.component.css'],
    pipes: [PortFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})
export class PortListComponent implements OnInit {
    pageTitle: string = 'Port List';
    listvFilter: string = '';
    errorMessage: string;
    ports: IPort[];

    constructor(private _portService: PortService) {

    }

    ngOnInit(): void {
           this._portService.getPorts()
                     .subscribe(
                       ports => this.ports = ports,
                       error =>  this.errorMessage = <any>error);
    }
}
