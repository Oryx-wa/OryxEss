

import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ious-grid',
  templateUrl: 'ious-list.component.html',
  styleUrls: ['ious-list.component.css'],
  directives: [ CORE_DIRECTIVES  ,ROUTER_DIRECTIVES],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IousListComponent implements OnInit {
   
    @Input() iouHeaders: any[] = [];
   constructor( ) {
           
    }

   

    ngOnInit() {
        
    }

   
}
