System.register(['@angular/core', '@angular/router', './port.service'], function(exports_1, context_1) {
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
    var core_1, router_1, port_service_1;
    var PortDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (port_service_1_1) {
                port_service_1 = port_service_1_1;
            }],
        execute: function() {
            PortDetailComponent = (function () {
                function PortDetailComponent(_portService, _router) {
                    this._portService = _portService;
                    this._router = _router;
                    this.pageTitle = 'port Detail';
                }
                PortDetailComponent.prototype.routerOnActivate = function (curr) {
                    var id = +curr.getParam('id');
                    this.getPort(id);
                };
                PortDetailComponent.prototype.getPort = function (id) {
                    var _this = this;
                    this._portService.getPort(id)
                        .subscribe(function (port) { return _this.port = port; }, function (error) { return _this.errorMessage = error; });
                };
                PortDetailComponent.prototype.onBack = function () {
                    this._router.navigate(['/ports']);
                };
                PortDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/port/port-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [port_service_1.PortService, router_1.Router])
                ], PortDetailComponent);
                return PortDetailComponent;
            }());
            exports_1("PortDetailComponent", PortDetailComponent);
        }
    }
});
//# sourceMappingURL=port-detail.component.js.map