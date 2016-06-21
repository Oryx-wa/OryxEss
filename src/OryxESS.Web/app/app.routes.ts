import { provideRouter, RouterConfig } from '@angular/router';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';

//import {SecurityService} from './services/security.service';
//import {iouHeaderService} from './iou/iouheader.service';
import { WelcomeComponent } from './home/welcome.component';
import { IouComponent } from './iou/iou.component';
import { IouRoutes} from './iou/iou.routes';


const appRoutes: RouterConfig = [
   
    { path: 'welcome', component: WelcomeComponent },
    { path: 'forbidden',  component: ForbiddenComponent },
    { path: 'unauthorized',  component: UnauthorizedComponent },
    //{ path: 'iou', component: IouComponent },
     { path: '', component: WelcomeComponent },
     ...IouRoutes
    
  //...CustomersRoutes,
  //...CustomerRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(appRoutes)
];