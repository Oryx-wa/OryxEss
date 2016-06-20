import { Component, OnInit }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { IInspector } from './inspector';
import { InspectorFilterPipe } from './inspector-filter.pipe';
import { StarComponent } from '../shared/star.component';
import {InspectorService } from './inspector.service';

@Component({
    templateUrl: 'app/inspector/inspector-list.component.html',
    styleUrls: ['app/inspector/inspector-list.component.css'],
    pipes: [InspectorFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})
export class InspectorListComponent implements OnInit {
    pageTitle: string = 'Inspector List';
    listvFilter: string = '';
    errorMessage: string;
    inspectors: IInspector[];


    constructor(private _inspectorService:InspectorService) {

    }

   
    ngOnInit(): void {
           this._inspectorService.getInspectors()
                     .subscribe(
                      inspectors => this.inspectors = inspectors,
                       error =>  this.errorMessage = <any>error);
    }
 }
