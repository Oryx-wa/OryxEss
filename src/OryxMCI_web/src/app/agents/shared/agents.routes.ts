import { RouterConfig } from '@angular/router';
import {AgentsComponent} from '../agents.component';
import {AgentsListComponent} from '../agents-list.component';
import {AgentsCardComponent} from '../agents-card.component';
import {AgentsCreateComponent} from '../agents-create.component';
import {AgentsEditComponent} from '../agents-edit.component';
import {AgentsDetailsComponent} from '../agents-details.component';
import { AuthGuard }             from '../../login/auth.guard';

export const AgentsRoutes: RouterConfig = [
    { path: 'agents', component: AgentsComponent, terminal: true, },
    { path: 'agentsList', component: AgentsListComponent },
    //{ path: 'agentsCard', component: AgentsCardComponent, canActivate: [AuthGuard] },
    { path: 'agentCreate', component: AgentsCreateComponent },
    { path: 'agentEdit/:id', component: AgentsEditComponent },
    { path: 'agentDetails/:id', component: AgentsDetailsComponent }


]