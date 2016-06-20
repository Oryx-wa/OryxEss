import { Component } from '@angular/core';
import { Router, OnActivate, RouteSegment } from '@angular/router';

import { IInspector } from './inspector';
import { InspectorService } from './inspector.service';


@Component({
    templateUrl: 'app/inspector/inspector-detail.component.html',
    
})
export class InspectorDetailComponent implements OnActivate {
    pageTitle: string = 'Inspector Detail';
    inspector: IInspector;
    errorMessage: string;

    constructor(private _inspectorService: InspectorService,
                private _router: Router) {
    }

    routerOnActivate(curr: RouteSegment): void {
        let id = +curr.getParam('id');
        this.getInspector(id);
    }

    getInspector(id: number) {
        this._inspectorService.getInspector(id)
            .subscribe(
            inspector => this.inspector = inspector,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/inspectors']);
    }

}
