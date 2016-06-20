System.register(['@angular/core', '@angular/router', './vessel.service'], function(exports_1, context_1) {
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
    var core_1, router_1, vessel_service_1;
    var VesselDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (vessel_service_1_1) {
                vessel_service_1 = vessel_service_1_1;
            }],
        execute: function() {
            VesselDetailComponent = (function () {
                function VesselDetailComponent(_vesselService, _router) {
                    this._vesselService = _vesselService;
                    this._router = _router;
                    this.pageTitle = 'Vessel Detail';
                }
                VesselDetailComponent.prototype.routerOnActivate = function (curr) {
                    var id = +curr.getParam('id');
                    this.getVessel(id);
                };
                VesselDetailComponent.prototype.getVessel = function (id) {
                    var _this = this;
                    this._vesselService.getVessel(id)
                        .subscribe(function (vessel) { return _this.vessel = vessel; }, function (error) { return _this.errorMessage = error; });
                };
                VesselDetailComponent.prototype.onBack = function () {
                    this._router.navigate(['/vessels']);
                };
                VesselDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/vessel/vessel-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [vessel_service_1.VesselService, router_1.Router])
                ], VesselDetailComponent);
                return VesselDetailComponent;
            }());
            exports_1("VesselDetailComponent", VesselDetailComponent);
        }
    }
});
//# sourceMappingURL=vessel-detail.component.js.map