import { provideRouter, RouterConfig } from '@angular/router';


import {SecurityService} from './login/security.service';
//import {IouService} from './iou/shared/iou.service';
import { HomeComponent } from './home/home.component';
//import { IouComponent } from './iou/iou.component';
//import { IousRoutes} from './iou/iouheaders/ious.routes';
//import { IouRoutes} from './iou/+iouheader/iou.routes';
import { AuthGuard }          from './login/auth.guard';
import { CanDeactivateGuard } from './interfaces';
import {LoginRoutes, AUTH_PROVIDERS} from './login/login.routes'
import {AgentsRoutes} from './agents/shared/agents.routes';
import {VesselsRoutes} from './vessels/shared/vessels.routes'


const appRoutes: RouterConfig = [
   
   { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    
     ...LoginRoutes,
     //...IousRoutes,
    //...IouRoutes,
    ...AgentsRoutes, 
    ...VesselsRoutes,      
 
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(appRoutes),,
  CanDeactivateGuard,
  AUTH_PROVIDERS
];