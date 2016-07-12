import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES  } from '@angular/common';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { IouService } from '../shared/iou.service';
import { AuthGuard }             from '../../login/auth.guard';
import { IouHeader } from '../models/iou-header';

import {SecurityService} from '../../login/security.service';
import {DisplayModeEnum} from '../../shared/shared-enum.enum';

@Component({
  moduleId: module.id,
  selector: 'iou-form',
  templateUrl: 'iou-form.component.html',  
  directives: [ CORE_DIRECTIVES,ROUTER_DIRECTIVES, FORM_DIRECTIVES, MD_INPUT_DIRECTIVES ],
  
})
export class IouFormComponent implements OnInit  {
  submitted = false;
  title:string = ""
  active = true;
  edit = false;

  model: IouHeader;
  @Input() mode: string;
  
  projects = ['P001', 'P002',
            'P003', 'P004'];
  

  constructor(private router: Router, private route: ActivatedRoute, private _iouHeaderService: IouService,
     public securityService: SecurityService  ) { 
        //this.newiouHeader();
       
     }

     ngOnInit(){
        const id = +this.router.routerState.parent(this.route).snapshot.params['id'];
        this.model = new IouHeader();
        this.getData(id);
        this.edit = false;
        console.log(id)
     }

   
    onSubmit() { this.submitted = true; }
   

    newiouHeader() {
    this.model = new IouHeader();
    this.active = false;
    setTimeout(() => this.active = true, 0);
    }

    cancel(){
      this.router.navigate(['/iou'])
    }

    private getData(id: number) {
        if(id == -1){          
          this.mode = "New"
        }
        else{
           console.log('iou :getData starting...');
          this._iouHeaderService
            .GetById(id)
            .subscribe(data => this.model = data,
            error => this.securityService.HandleError(error),
            () => console.log('Get id completed'));
            this.mode = "View"
          console.log("id completed successfully");
        }
    // TODO: Remove this when we're done
    //get diagnostic() { return JSON.stringify(this.model); }
   
    }
}

