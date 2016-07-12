System.register(['@angular/core', '@angular/http', 'rxjs/Rx', '@angular/router', './port/port-list.component', './agents/agent-list.component', './berth/berth-list.component', './inspector/inspector-list.component', './agents/add-agent-form.component', './vessel/vessel.service', './port/port.service', './agents/agent.service', './berth/berth.service', './inspector/inspector.service', './home/welcome.component', './port/port-detail.component', './vessel/vessel-list.component', './vessel/vessel-detail.component', './agents/agent-detail.component', './berth/berth-detail.component', './inspector/inspector-detail.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, port_list_component_1, agent_list_component_1, berth_list_component_1, inspector_list_component_1, add_agent_form_component_1, add_agent_form_component_2, vessel_service_1, port_service_1, agent_service_1, berth_service_1, inspector_service_1, welcome_component_1, port_detail_component_1, vessel_list_component_1, vessel_detail_component_1, agent_detail_component_1, berth_detail_component_1, inspector_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (port_list_component_1_1) {
                port_list_component_1 = port_list_component_1_1;
            },
            function (agent_list_component_1_1) {
                agent_list_component_1 = agent_list_component_1_1;
            },
            function (berth_list_component_1_1) {
                berth_list_component_1 = berth_list_component_1_1;
            },
            function (inspector_list_component_1_1) {
                inspector_list_component_1 = inspector_list_component_1_1;
            },
            function (add_agent_form_component_1_1) {
                add_agent_form_component_1 = add_agent_form_component_1_1;
                add_agent_form_component_2 = add_agent_form_component_1_1;
            },
            function (vessel_service_1_1) {
                vessel_service_1 = vessel_service_1_1;
            },
            function (port_service_1_1) {
                port_service_1 = port_service_1_1;
            },
            function (agent_service_1_1) {
                agent_service_1 = agent_service_1_1;
            },
            function (berth_service_1_1) {
                berth_service_1 = berth_service_1_1;
            },
            function (inspector_service_1_1) {
                inspector_service_1 = inspector_service_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (port_detail_component_1_1) {
                port_detail_component_1 = port_detail_component_1_1;
            },
            function (vessel_list_component_1_1) {
                vessel_list_component_1 = vessel_list_component_1_1;
            },
            function (vessel_detail_component_1_1) {
                vessel_detail_component_1 = vessel_detail_component_1_1;
            },
            function (agent_detail_component_1_1) {
                agent_detail_component_1 = agent_detail_component_1_1;
            },
            function (berth_detail_component_1_1) {
                berth_detail_component_1 = berth_detail_component_1_1;
            },
            function (inspector_detail_component_1_1) {
                inspector_detail_component_1 = inspector_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'Acme Product Management';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [agent_service_1.AgentService, vessel_service_1.VesselService, inspector_service_1.InspectorService,
                            berth_service_1.BerthService, port_service_1.PortService, http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.Routes([
                        { path: '/', component: welcome_component_1.WelcomeComponent },
                        { path: '/welcome', component: welcome_component_1.WelcomeComponent },
                        { path: '/ports', component: port_list_component_1.PortListComponent },
                        { path: '/vessels', component: vessel_list_component_1.VesselListComponent },
                        { path: '/berths', component: berth_list_component_1.BerthListComponent },
                        { path: '/vessel/:id', component: vessel_detail_component_1.VesselDetailComponent },
                        { path: '/port/:id', component: port_detail_component_1.PortDetailComponent },
                        { path: '/berth/:id', component: berth_detail_component_1.BerthDetailComponent },
                        { path: '/inspector/:id', component: inspector_detail_component_1.InspectorDetailComponent },
                        { path: '/agent/:id', component: agent_detail_component_1.AgentDetailComponent },
                        { path: '/agents', component: agent_list_component_1.AgentListComponent },
                        { path: '/inspectors', component: inspector_list_component_1.InspectorListComponent },
                        { path: '/addagent', component: add_agent_form_component_1.AddAgentFormComponent },
                        { path: '/editagent/:id', component: add_agent_form_component_2.EditAgentFormComponent }
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