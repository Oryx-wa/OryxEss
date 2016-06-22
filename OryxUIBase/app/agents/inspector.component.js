System.register(['angular2/core', './inspector-list.component'], function(exports_1, context_1) {
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
    var core_1, inspector_list_component_1;
    var InspectorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (inspector_list_component_1_1) {
                inspector_list_component_1 = inspector_list_component_1_1;
            }],
        execute: function() {
            InspectorComponent = (function () {
                function InspectorComponent() {
                }
                InspectorComponent = __decorate([
                    core_1.Component({
                        selector: 'my-inspector',
                        // templateUrl:'app/inspector/inspector.component.html',
                        template: '<my-inspector-list></my-inspector-list>',
                        directives: [inspector_list_component_1.InspectorList]
                    }), 
                    __metadata('design:paramtypes', [])
                ], InspectorComponent);
                return InspectorComponent;
            }());
            exports_1("InspectorComponent", InspectorComponent);
        }
    }
});
//# sourceMappingURL=inspector.component.js.map