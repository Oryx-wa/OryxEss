import { RouterConfig } from '@angular/router';
import {WorkflowTriggerComponent} from '../+workflowtrigger/workflow-trigger.component';

import { AuthGuard }             from '../../login/auth.guard';

export const WorkflowRoutes: RouterConfig = [
    {path: 'workflow/trigger', component: WorkflowTriggerComponent, terminal: true}
]
