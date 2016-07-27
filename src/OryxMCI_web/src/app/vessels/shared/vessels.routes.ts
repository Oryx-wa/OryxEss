import { RouterConfig } from '@angular/router';
import {VesselsComponent} from '../vessels.component';
import {VesselsListComponent} from '../vessels-list.component';
import {VesselsCardComponent} from '../vessels-card.component';
import {VesselsCreateComponent} from '../vessels-create.component';
import {VesselsEditComponent} from '../vessels-edit.component';
import {VesselsDetailsComponent} from '../vessels-details.component';
import { CanDeactivateGuard }    from '../../interfaces';
import { AuthGuard}             from '../../login/auth.guard';

export const VesselsRoutes: RouterConfig = [
    { path: '', component: VesselsComponent, pathMatch:"full"},
    { path: 'vessels', component: VesselsComponent },
    //{ path: 'vesselsList', component: VesselsListComponent },
    //{ path: 'vesselsCard', component: VesselsCardComponent, canActivate: [AuthGuard] },
    { path: 'vesselCreate', component: VesselsCreateComponent},
    { path: 'vesselEdit/:id', component: VesselsEditComponent },
    { path: 'vesselDetails/:id', component: VesselsDetailsComponent}


]