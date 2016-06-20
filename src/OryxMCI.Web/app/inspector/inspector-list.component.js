System.register(['@angular/core', '@angular/router', './inspector-filter.pipe', './inspector.service'], function(exports_1, context_1) {
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
    var core_1, router_1, inspector_filter_pipe_1, inspector_service_1;
    var InspectorListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (inspector_filter_pipe_1_1) {
                inspector_filter_pipe_1 = inspector_filter_pipe_1_1;
            },
            function (inspector_service_1_1) {
                inspector_service_1 = inspector_service_1_1;
            }],
        execute: function() {
            InspectorListComponent = (function () {
                function InspectorListComponent(_inspectorService) {
                    this._inspectorService = _inspectorService;
                    this.pageTitle = 'Inspector List';
                    this.listvFilter = '';
                }
                InspectorListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._inspectorService.getInspectors()
                        .subscribe(function (inspectors) { return _this.inspectors = inspectors; }, function (error) { return _this.errorMessage = error; });
                };
                InspectorListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/inspector/inspector-list.component.html',
                        styleUrls: ['app/inspector/inspector-list.component.css'],
                        pipes: [inspector_filter_pipe_1.InspectorFilterPipe],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [inspector_service_1.InspectorService])
                ], InspectorListComponent);
                return InspectorListComponent;
            }());
            exports_1("InspectorListComponent", InspectorListComponent);
        }
    }
});
//# sourceMappingURL=inspector-list.component.js.map