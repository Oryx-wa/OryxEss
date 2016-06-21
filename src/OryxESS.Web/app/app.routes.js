"use strict";
var router_1 = require('@angular/router');
var forbidden_component_1 = require('./forbidden/forbidden.component');
var unauthorized_component_1 = require('./unauthorized/unauthorized.component');
//import {SecurityService} from './services/security.service';
//import {iouHeaderService} from './iou/iouheader.service';
var welcome_component_1 = require('./home/welcome.component');
var iou_routes_1 = require('./iou/iou.routes');
var appRoutes = [
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: 'forbidden', component: forbidden_component_1.ForbiddenComponent },
    { path: 'unauthorized', component: unauthorized_component_1.UnauthorizedComponent },
    //{ path: 'iou', component: IouComponent },
    { path: '', component: welcome_component_1.WelcomeComponent }
].concat(iou_routes_1.IouRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(appRoutes)
];
//# sourceMappingURL=app.routes.js.map