import { RouterConfig } from '@angular/router';
import {BerthsComponent} from '../berths.component';
import {BerthsListComponent} from '../berths-list.component';
import {BerthsCardComponent} from '../berths-card.component';
import {BerthsCreateComponent} from '../berths-create.component';
import {BerthsEditComponent} from '../berths-edit.component';
import {BerthsDetailsComponent} from '../berths-details.component';
import { CanDeactivateGuard }    from '../../interfaces';
import { AuthGuard}             from '../../login/auth.guard';

export const BerthsRoutes: RouterConfig = [
    { path: '', component: BerthsComponent, pathMatch:"full"},
    { path: 'berths', component: BerthsComponent},
    //{ path: 'berthsList', component: BerthsListComponent },
    //{ path: 'berthsCard', component: BerthsCardComponent, canActivate: [AuthGuard] },
    { path: 'berthCreate', component: BerthsCreateComponent},
    { path: 'berthEdit/:id', component: BerthsEditComponent},
    { path: 'berthDetails/:id', component: BerthsDetailsComponent}


]