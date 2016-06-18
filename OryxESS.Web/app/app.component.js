System.register(['@angular/core', 'rxjs/Rx', '@angular/router', './forbidden/forbidden.component', './unauthorized/unauthorized.component', './iou/iouheader.service', './home/welcome.component', './iou/iouheader-list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, forbidden_component_1, unauthorized_component_1, iouheader_service_1, welcome_component_1, iouheader_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forbidden_component_1_1) {
                forbidden_component_1 = forbidden_component_1_1;
            },
            function (unauthorized_component_1_1) {
                unauthorized_component_1 = unauthorized_component_1_1;
            },
            function (iouheader_service_1_1) {
                iouheader_service_1 = iouheader_service_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (iouheader_list_component_1_1) {
                iouheader_list_component_1 = iouheader_list_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'Oryx Employee Self Service';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [iouheader_service_1.iouHeaderService]
                    }),
                    router_1.Routes([
                        { path: '/', component: welcome_component_1.WelcomeComponent },
                        { path: '/welcome', component: welcome_component_1.WelcomeComponent },
                        { path: '/Forbidden', component: forbidden_component_1.ForbiddenComponent },
                        { path: '/Unauthorized', component: unauthorized_component_1.UnauthorizedComponent },
                        { path: '/iou', component: iouheader_list_component_1.IouListComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map