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
    { path: 'agentsList', component: AgentsListComponent, canActivate: [AuthGuard] },
    { path: 'agentsCard', component: AgentsCardComponent, canActivate: [AuthGuard] },
    { path: 'agentCreate', component: AgentsCreateComponent, canActivate: [AuthGuard] },
    { path: 'agentEdit/:id', component: AgentsEditComponent, canActivate: [AuthGuard] },
    { path: 'agentDetails/:id', component: AgentsDetailsComponent, canActivate: [AuthGuard] }


]