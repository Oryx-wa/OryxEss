import { RouterConfig } from '@angular/router';
import { IouComponent }   from './iou.component';
//import { IouListComponent }   from './iou-list.component';
import { IouEditComponent } from './iou-edit.component';
import { IouCreateComponent } from './iou-create.component';
import { IouDetailsComponent } from './iou-details.component';
import {IouFormComponent} from './iou-form.component';


import { CanDeactivateGuard }    from '../../interfaces';
import { AuthGuard }             from '../../login/auth.guard';

export const IouRoutes: RouterConfig = [
    
    { path:'iou/:id', component: IouComponent,
        children: [
            {path: 'edit', component: IouEditComponent, canActivate: [AuthGuard]},
            {path: 'create', component: IouEditComponent, canActivate: [AuthGuard]},
            {path: 'details', component: IouEditComponent, canActivate: [AuthGuard]},
            {path: 'form', component: IouFormComponent, canActivate: [AuthGuard]}
        ]  
    }    
    ];

