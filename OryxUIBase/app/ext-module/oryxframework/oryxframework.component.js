System.register(["angular2/core", "../oryxmenu/oryxmenu.component", "../oryxdashboard/oryxdashboard.component"], function(exports_1, context_1) {
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
    var core_1, oryxmenu_component_1, oryxdashboard_component_1;
    var oryxFrameworkComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (oryxmenu_component_1_1) {
                oryxmenu_component_1 = oryxmenu_component_1_1;
            },
            function (oryxdashboard_component_1_1) {
                oryxdashboard_component_1 = oryxdashboard_component_1_1;
            }],
        execute: function() {
            oryxFrameworkComponent = (function () {
                function oryxFrameworkComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], oryxFrameworkComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], oryxFrameworkComponent.prototype, "subtitle", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], oryxFrameworkComponent.prototype, "iconfile", void 0);
                oryxFrameworkComponent = __decorate([
                    core_1.Component({
                        selector: 'oryx-framework',
                        templateUrl: 'app/ext-module/oryxframework/oryxframework.component.html',
                        styleUrls: ['app/ext-module/oryxframework/oryxframework.component.css'],
                        directives: [oryxmenu_component_1.oryxMenuComponent, oryxdashboard_component_1.oryxDashboardComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], oryxFrameworkComponent);
                return oryxFrameworkComponent;
            }());
            exports_1("oryxFrameworkComponent", oryxFrameworkComponent);
        }
    }
});
//# sourceMappingURL=oryxframework.component.js.map