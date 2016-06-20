System.register(['@angular/core', '@angular/router', './agent-filter.pipe', './agent.service'], function(exports_1, context_1) {
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
    var core_1, router_1, agent_filter_pipe_1, agent_service_1;
    var AgentListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (agent_filter_pipe_1_1) {
                agent_filter_pipe_1 = agent_filter_pipe_1_1;
            },
            function (agent_service_1_1) {
                agent_service_1 = agent_service_1_1;
            }],
        execute: function() {
            AgentListComponent = (function () {
                function AgentListComponent(_agentService) {
                    this._agentService = _agentService;
                    this.pageTitle = 'Agent List';
                    this.listvFilter = '';
                }
                AgentListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._agentService.getagents()
                        .subscribe(function (agents) { return _this.agents = agents; }, function (error) { return _this.errorMessage = error; });
                };
                AgentListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/agent/agent-list.component.html',
                        styleUrls: ['app/agent/agent-list.component.css'],
                        pipes: [agent_filter_pipe_1.AgentFilterPipe],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [agent_service_1.AgentService])
                ], AgentListComponent);
                return AgentListComponent;
            }());
            exports_1("AgentListComponent", AgentListComponent);
        }
    }
});
//# sourceMappingURL=agent-list.component.js.map