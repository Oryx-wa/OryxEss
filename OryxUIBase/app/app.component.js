System.register(["angular2/core", './ext-module/oryxframework/oryxframework.component', "./agents/agent-form.component"], function(exports_1, context_1) {
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
    var core_1, oryxframework_component_1, agent_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (oryxframework_component_1_1) {
                oryxframework_component_1 = oryxframework_component_1_1;
            },
            function (agent_form_component_1_1) {
                agent_form_component_1 = agent_form_component_1_1;
            }],
        execute: function() {
            //import {InspectorFormComponent} from "./inspector/inspector-form.component";
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = "Oryx West Africa";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'mci-app',
                        // template: '<div><h3>{{pageTittle}}</h3></div>',
                        templateUrl: 'app/app.component.html',
                        //template:'<inspector-form></inspector-form>',
                        directives: [oryxframework_component_1.oryxFrameworkComponent, agent_form_component_1.AgentFormComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map