import { RouterConfig } from '@angular/router';
import {AgentsComponent} from '../agents.component';

import { AuthGuard }             from '../../login/auth.guard';

export const AgentsRoutes: RouterConfig = [
    {path: 'agents', component: AgentsComponent, terminal: true}
]