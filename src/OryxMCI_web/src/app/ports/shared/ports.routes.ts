import { RouterConfig } from '@angular/router';
import {PortsComponent} from '../ports.component';
import {PortsListComponent} from '../ports-list.component';
import {PortsCardComponent} from '../ports-card.component';
import {PortsCreateComponent} from '../ports-create.component';
import {PortsEditComponent} from '../ports-edit.component';
import {PortsDetailsComponent} from '../ports-details.component';
import { CanDeactivateGuard }    from '../../interfaces';
import { AuthGuard}             from '../../login/auth.guard';

export const PortsRoutes: RouterConfig = [
    { path: '', component: PortsComponent, pathMatch:"full"},
    { path: 'ports', component: PortsComponent},
    //{ path: 'portsList', component: PortsListComponent },
    //{ path: 'portsCard', component: PortsCardComponent, canActivate: [AuthGuard] },
    { path: 'portCreate', component: PortsCreateComponent},
    { path: 'portEdit/:id', component: PortsEditComponent},
    { path: 'portDetails/:id', component: PortsDetailsComponent }


]