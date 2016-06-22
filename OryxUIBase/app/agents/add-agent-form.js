System.register(['angular2/core', 'angular2/common', 'angular2/router', './agent-form.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, agent_form_service_1;
    var AddAgentForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (agent_form_service_1_1) {
                agent_form_service_1 = agent_form_service_1_1;
            }],
        execute: function() {
            AddAgentForm = (function () {
                function AddAgentForm(formBuilder, _agentService, _router) {
                    this.formBuilder = formBuilder;
                    this._agentService = _agentService;
                    this._router = _router;
                }
                AddAgentForm.prototype.addAgent = function () {
                    var _this = this;
                    this._agentService.addAnAgent(this.addAgentForm.value)
                        .map(function (r) { return r.json(); })
                        .subscribe(function (result) {
                        _this._router.navigate('/');
                    });
                };
                AddAgentForm = __decorate([
                    core_1.Component({
                        selector: 'add',
                        templateUrl: '/agents/add-agent-form.html',
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, agent_form_service_1.AgentService, router_1.Router])
                ], AddAgentForm);
                return AddAgentForm;
            }());
            exports_1("AddAgentForm", AddAgentForm);
        }
    }
});
//# sourceMappingURL=add-agent-form.js.map