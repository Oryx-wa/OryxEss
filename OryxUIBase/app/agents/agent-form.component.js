System.register(['angular2/core', 'angular2/common', './agent', './agent-form.service'], function(exports_1, context_1) {
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
    var core_1, common_1, agent_1, agent_form_service_1;
    var AgentFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (agent_1_1) {
                agent_1 = agent_1_1;
            },
            function (agent_form_service_1_1) {
                agent_form_service_1 = agent_form_service_1_1;
            }],
        execute: function() {
            AgentFormComponent = (function () {
                function AgentFormComponent(agentService) {
                    var _this = this;
                    this.agentService = agentService;
                    this.model = new agent_1.Agent(0, ' ', ' ', true);
                    this.submitted = false;
                    this.active = true;
                    agentService.getAllAgent()
                        .map(function (agents) { return agents.json(); })
                        .subscribe(function (a) {
                        _this.agents = a;
                    });
                }
                AgentFormComponent.prototype.onSubmit = function () { this.submitted = true; };
                AgentFormComponent = __decorate([
                    core_1.Component({
                        selector: 'agent-form',
                        templateUrl: 'app/agents/agent-form.component.html',
                        directives: [common_1.NgForm],
                    }), 
                    __metadata('design:paramtypes', [agent_form_service_1.AgentService])
                ], AgentFormComponent);
                return AgentFormComponent;
            }());
            exports_1("AgentFormComponent", AgentFormComponent);
        }
    }
});
//# sourceMappingURL=agent-form.component.js.map