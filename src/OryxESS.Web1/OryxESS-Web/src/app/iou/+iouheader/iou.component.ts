import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {DisplayModeEnum} from '../../shared/shared-enum.enum';

import { IouService } from '../shared/iou.service';
import { AuthGuard }             from '../../login/auth.guard';
import { IouHeader } from '../models/iou-header';
import {IouFormComponent} from './iou-form.component'

import {SecurityService} from '../../login/security.service';


@Component({
  moduleId: module.id,
  selector: 'app-iou',
  templateUrl: 'iou.component.html',
  directives: [ ROUTER_DIRECTIVES,IouFormComponent]
})
export class IouComponent implements OnInit {

  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;

  model: IouHeader;
  
  


  constructor(private router: Router, private route: ActivatedRoute, private _iouHeaderService: IouService,
     public securityService: SecurityService ) { }

  ngOnInit() {
      //Next line needs a better technique. This is the easiest way
      //to get child route path that I've found so far.
      //Hoping this will be easier with later builds of router
      const state = this.router.routerState;
      const id: number  = state.firstChild(state.root).snapshot.params['id'];
      this.getData(id);

      const path = this.router.url.split('/')[3];
      switch (path) {
        case 'details':
          this.displayMode = DisplayModeEnum.Details;
          break;
        case 'create':
          this.displayMode = DisplayModeEnum.Create;
          break;
        case 'edit':
          this.displayMode = DisplayModeEnum.Edit;
          break;
        case 'form':
          this.displayMode = DisplayModeEnum.Form;
          break;
      }
    }
    private getData(id: number) {
        console.log('iou :getData starting...');
        this._iouHeaderService
            .GetById(id)
            .subscribe(data => this.model = data,
            error => this.securityService.HandleError(error),
            () => console.log('Get all completed'));
          console.log("id completed successfully");
    }
}
