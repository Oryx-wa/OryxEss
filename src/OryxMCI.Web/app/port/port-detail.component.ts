import { Component } from '@angular/core';
import { Router, OnActivate, RouteSegment } from '@angular/router';

import { IPort } from './port';
import { PortService } from './port.service';

@Component({
    templateUrl: 'app/port/port-detail.component.html'
})
export class PortDetailComponent implements OnActivate {
    pageTitle: string = 'port Detail';
    port: IPort;
    errorMessage: string;

    constructor(private _portService: PortService,
                private _router: Router) {
    }

    routerOnActivate(curr: RouteSegment): void {
        let id = +curr.getParam('id');
        this.getPort(id);
    }

    getPort(id: number) {
        this._portService.getPort(id)
            .subscribe(
            port => this.port = port,            
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/ports']);
    }

}
