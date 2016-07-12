import { RouterConfig } from '@angular/router';
import { IouComponent }   from './iou.component';
import { IouStatusComponent }   from './iou-status.component';

import {IouFormComponent} from './iou-form.component';
import {IouForm2Component} from './iou-form2.component';

import { CanDeactivateGuard }    from '../../interfaces';
import { AuthGuard }             from '../../login/auth.guard';

export const IouRoutes: RouterConfig = [
    
    { path:'iou/:id', component: IouComponent,
        children: [
           {path: 'form', component: IouFormComponent, canActivate: [AuthGuard]},
           {path: 'status', component: IouStatusComponent, canActivate: [AuthGuard]},
           {path: 'form', component: IouForm2Component, canActivate: [AuthGuard]}
        ]  
    }    
    ];

