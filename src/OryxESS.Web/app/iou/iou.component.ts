import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { SecurityService } from '../services/security.service';
import { Observable }       from 'rxjs/Observable';
import {  ROUTER_DIRECTIVES  } from '@angular/router';

import {IouListComponent} from '../iou/iouheader-list.component';
import {IouCreateComponent} from '../iou/iouheader-create.component';
import {IouEditComponent} from '../iou/iouheader-edit.component';

@Component({
    selector: 'iou',
    templateUrl: 'app/iou/iou.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})



export class IouComponent { }