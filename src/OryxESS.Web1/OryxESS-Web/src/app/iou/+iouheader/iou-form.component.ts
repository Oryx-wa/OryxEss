import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES  } from '@angular/common';

import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { IouService } from '../shared/iou.service';
import { AuthGuard }             from '../../login/auth.guard';
import { IouHeader } from '../models/iou-header';

import {SecurityService} from '../../login/security.service';

@Component({
  moduleId: module.id,
  selector: 'iou-form',
  templateUrl: 'iou-form.component.html',  
  directives: [ CORE_DIRECTIVES,ROUTER_DIRECTIVES, FORM_DIRECTIVES ],
  
})
export class IouFormComponent implements OnInit  {
  submitted = false;
  title:string = "Deta"

  @Input() model: IouHeader;
  
  projects = ['P001', 'P002',
            'P003', 'P004'];

  constructor(private router: Router, private route: ActivatedRoute, private _iouHeaderService: IouService,
     public securityService: SecurityService  ) { }

     ngOnInit(){
       this.newiouHeader()
     }

   
    onSubmit() { this.submitted = true; }
    active = true;

    newiouHeader() {
    this.model = new IouHeader();
    this.active = false;
    setTimeout(() => this.active = true, 0);
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
   
}
