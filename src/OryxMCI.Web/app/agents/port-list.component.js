System.register(['@angular/core', '@angular/router', './port-filter.pipe', './port.service'], function(exports_1, context_1) {
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
    var core_1, router_1, port_filter_pipe_1, port_service_1;
    var PortListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (port_filter_pipe_1_1) {
                port_filter_pipe_1 = port_filter_pipe_1_1;
            },
            function (port_service_1_1) {
                port_service_1 = port_service_1_1;
            }],
        execute: function() {
            PortListComponent = (function () {
                function PortListComponent(_portService) {
                    this._portService = _portService;
                    this.pageTitle = 'port List';
                    this.listvFilter = '';
                }
                PortListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._portService.getPorts()
                        .subscribe(function (ports) { return _this.ports = ports; }, function (error) { return _this.errorMessage = error; });
                };
                PortListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/port/port-list.component.html',
                        styleUrls: ['app/port/port-list.component.css'],
                        pipes: [port_filter_pipe_1.PortFilterPipe],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [port_service_1.PortService])
                ], PortListComponent);
                return PortListComponent;
            }());
            exports_1("PortListComponent", PortListComponent);
        }
    }
});
//# sourceMappingURL=port-list.component.js.map