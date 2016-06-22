System.register(['@angular/core', '@angular/router', './agent.service'], function(exports_1, context_1) {
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
    var core_1, router_1, agent_service_1;
    var AgentDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (agent_service_1_1) {
                agent_service_1 = agent_service_1_1;
            }],
        execute: function() {
            AgentDetailComponent = (function () {
                function AgentDetailComponent(_agentService, _router) {
                    this._agentService = _agentService;
                    this._router = _router;
                    this.pageTitle = 'agent Detail';
                }
                AgentDetailComponent.prototype.routerOnActivate = function (curr) {
                    var id = +curr.getParam('id');
                    this.getAgent(id);
                };
                AgentDetailComponent.prototype.getAgent = function (id) {
                    var _this = this;
                    this._agentService.getagent(id)
                        .subscribe(function (agent) { return _this.agent = agent; }, function (error) { return _this.errorMessage = error; });
                };
                AgentDetailComponent.prototype.onBack = function () {
                    this._router.navigate(['/agents']);
                };
                AgentDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/agents/agent-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [agent_service_1.AgentService, router_1.Router])
                ], AgentDetailComponent);
                return AgentDetailComponent;
            }());
            exports_1("AgentDetailComponent", AgentDetailComponent);
        }
    }
});
//# sourceMappingURL=agent-detail.component.js.map