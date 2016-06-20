System.register(['@angular/core', '@angular/router', './vessel-filter.pipe', './vessel.service'], function(exports_1, context_1) {
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
    var core_1, router_1, vessel_filter_pipe_1, vessel_service_1;
    var VesselListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (vessel_filter_pipe_1_1) {
                vessel_filter_pipe_1 = vessel_filter_pipe_1_1;
            },
            function (vessel_service_1_1) {
                vessel_service_1 = vessel_service_1_1;
            }],
        execute: function() {
            VesselListComponent = (function () {
                function VesselListComponent(_vesselService) {
                    this._vesselService = _vesselService;
                    this.pageTitle = 'Vessel List';
                    this.listvFilter = '';
                }
                VesselListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._vesselService.getVessels()
                        .subscribe(function (vessels) { return _this.vessels = vessels; }, function (error) { return _this.errorMessage = error; });
                };
                VesselListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/vessel/vessel-list.component.html',
                        styleUrls: ['app/vessel/vessel-list.component.css'],
                        pipes: [vessel_filter_pipe_1.VesselFilterPipe],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [vessel_service_1.VesselService])
                ], VesselListComponent);
                return VesselListComponent;
            }());
            exports_1("VesselListComponent", VesselListComponent);
        }
    }
});
//# sourceMappingURL=vessel-list.component.js.map