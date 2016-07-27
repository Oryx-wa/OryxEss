import { RouterConfig } from '@angular/router';
import {InspectorsComponent} from '../inspectors.component';
import {InspectorsListComponent} from '../inspectors-list.component';
import {InspectorsCardComponent} from '../inspectors-card.component';
import {InspectorsCreateComponent} from '../inspectors-create.component';
import {InspectorsEditComponent} from '../inspectors-edit.component';
import {InspectorsDetailsComponent} from '../inspectors-details.component';
import { CanDeactivateGuard }    from '../../interfaces';
import { AuthGuard}             from '../../login/auth.guard';

export const InspectorsRoutes: RouterConfig = [
    { path: '', component: InspectorsComponent, pathMatch:"full"},
    { path: 'inspectors', component: InspectorsComponent},
    //{ path: 'inspectorsList', component: InspectorsListComponent },
    //{ path: 'inspectorsCard', component: InspectorsCardComponent, canActivate: [AuthGuard] },
    { path: 'inspectorCreate', component: InspectorsCreateComponent},
    { path: 'inspectorEdit/:id', component: InspectorsEditComponent},
    { path: 'inspectorDetails/:id', component: InspectorsDetailsComponent }


]