import { RouterConfig } from '@angular/router';
import { IousComponent }   from './ious.component';

//import { CanDeactivateGuard }    from '../../interfaces';
import { AuthGuard }             from '../../login/auth.guard';

export const IousRoutes: RouterConfig = [
    {path: 'iou', component: IousComponent, terminal: true}
]

