System.register(['@angular/core', '@angular/router', './inspector.service'], function(exports_1, context_1) {
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
    var core_1, router_1, inspector_service_1;
    var InspectorDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (inspector_service_1_1) {
                inspector_service_1 = inspector_service_1_1;
            }],
        execute: function() {
            InspectorDetailComponent = (function () {
                function InspectorDetailComponent(_inspectorService, _router) {
                    this._inspectorService = _inspectorService;
                    this._router = _router;
                    this.pageTitle = 'Inspector Detail';
                }
                InspectorDetailComponent.prototype.routerOnActivate = function (curr) {
                    var id = +curr.getParam('id');
                    this.getInspector(id);
                };
                InspectorDetailComponent.prototype.getInspector = function (id) {
                    var _this = this;
                    this._inspectorService.getInspector(id)
                        .subscribe(function (inspector) { return _this.inspector = inspector; }, function (error) { return _this.errorMessage = error; });
                };
                InspectorDetailComponent.prototype.onBack = function () {
                    this._router.navigate(['/inspectors']);
                };
                InspectorDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/inspector/inspector-detail.component.html',
                    }), 
                    __metadata('design:paramtypes', [inspector_service_1.InspectorService, router_1.Router])
                ], InspectorDetailComponent);
                return InspectorDetailComponent;
            }());
            exports_1("InspectorDetailComponent", InspectorDetailComponent);
        }
    }
});
//# sourceMappingURL=inspector-detail.component.js.map