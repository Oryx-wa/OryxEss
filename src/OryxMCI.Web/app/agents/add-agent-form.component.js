System.register(['@angular/core', './agent', './agent.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, agent_1, agent_service_1, router_1;
    var AddAgentFormComponent, EditAgentFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (agent_1_1) {
                agent_1 = agent_1_1;
            },
            function (agent_service_1_1) {
                agent_service_1 = agent_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AddAgentFormComponent = (function () {
                function AddAgentFormComponent(_router, _agentService) {
                    this._router = _router;
                    this._agentService = _agentService;
                    this.active = true;
                    this.model = new agent_1.Agent(0, null, null);
                    this.submitted = false;
                }
                AddAgentFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._agentService.getagents()
                        .subscribe(function (agents) { return _this.agents = agents; }, function (error) { return _this.errorMessage = error; });
                };
                //addAgent (newAgent) {
                //  if (!newAgent) { return; }
                //this._agentService.addAgent(this.newAgent)
                //               .subscribe(
                //               agents  => this.agents.push(agents),
                //             error =>  this.errorMessage = <any>error);
                //}
                AddAgentFormComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    // this._router.navigate(['/agents']);
                };
                //onSave() {
                //    this._agentService.addAnAgent(('/agents', JSON.stringify(this.newAgent)));
                //}
                AddAgentFormComponent.prototype.onSave = function () {
                    this._agentService.addAnAgent(this.newAgent);
                };
                AddAgentFormComponent.prototype.newAgent = function () {
                    var _this = this;
                    this.model = new agent_1.Agent(0, null, null);
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                AddAgentFormComponent = __decorate([
                    core_1.Component({
                        selector: 'agent-form',
                        templateUrl: 'app/agents/add-agent-form.component.html',
                        styleUrls: ['app/agents/agent-form.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, agent_service_1.AgentService])
                ], AddAgentFormComponent);
                return AddAgentFormComponent;
            }());
            exports_1("AddAgentFormComponent", AddAgentFormComponent);
            EditAgentFormComponent = (function () {
                function EditAgentFormComponent(_router, _agentService) {
                    this._router = _router;
                    this._agentService = _agentService;
                    this.active = true;
                    this.model = new agent_1.Agent(0, null, null);
                    this.submitted = false;
                }
                EditAgentFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._agentService.getagents()
                        .subscribe(function (agents) { return _this.agents = agents; }, function (error) { return _this.errorMessage = error; });
                };
                EditAgentFormComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    // this._router.navigate(['/agents']);
                };
                EditAgentFormComponent.prototype.newAgent = function () {
                    var _this = this;
                    this.model = new agent_1.Agent(0, null, null);
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                EditAgentFormComponent = __decorate([
                    core_1.Component({
                        selector: 'edit-agent-form',
                        templateUrl: 'app/agents/edit-agent-form.component.html',
                        styleUrls: ['app/agents/edit-agent-form.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, agent_service_1.AgentService])
                ], EditAgentFormComponent);
                return EditAgentFormComponent;
            }());
            exports_1("EditAgentFormComponent", EditAgentFormComponent);
        }
    }
});
//# sourceMappingURL=add-agent-form.component.js.map