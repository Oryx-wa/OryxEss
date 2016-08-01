import { RouterConfig } from '@angular/router';
import {MciFormsComponent} from '../mciforms.component';
import {MciFormsListComponent} from '../mciforms-list.component';
import {MciFormsCardComponent} from '../mciforms-card.component';
import {MciFormsCreateComponent} from '../mciforms-create.component';
import {MciFormsEditComponent} from '../mciforms-edit.component';
import {MciFormsDetailsComponent} from '../mciforms-details.component';
import { CanDeactivateGuard }    from '../../interfaces';
import { AuthGuard}             from '../../login/auth.guard';

export const MciFormsRoutes: RouterConfig = [
    { path: '', component: MciFormsComponent, pathMatch:"full"},
    { path: 'mciforms', component: MciFormsComponent},
    //{ path: 'mciformsList', component: MciFormsListComponent },
    //{ path: 'mciformsCard', component: MciFormsCardComponent, canActivate: [AuthGuard] },
    { path: 'mciformCreate', component: MciFormsCreateComponent },
    { path: 'mciformEdit/:id', component: MciFormsEditComponent },
    { path: 'mciformDetails/:id', component: MciFormsDetailsComponent}


]