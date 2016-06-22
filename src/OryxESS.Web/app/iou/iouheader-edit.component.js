"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var Security_Service_1 = require('../services/Security.Service');
var iouheader_service_1 = require('../iou/iouheader.service');
var IouEditComponent = (function () {
    function IouEditComponent(_iouHeaderService, securityService, 
        // private _route: ActivatedRoute,
        _router) {
        this._iouHeaderService = _iouHeaderService;
        this.securityService = securityService;
        this._router = _router;
        this.message = "DataEventRecords Edit";
        //this.id = +this._routeParams.get('id');
    }
    IouEditComponent.prototype.ngOnInit = function () {
        console.log("IsAuthorized:" + this.securityService.IsAuthorized);
        console.log("HasAdminRole:" + this.securityService.HasAdminRole);
        //let id = +this._routeParams.get('id');
    };
    IouEditComponent = __decorate([
        core_1.Component({
            selector: 'iouheader-edit',
            templateUrl: 'app/iou/iouheader-edit.component.html',
            directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [iouheader_service_1.iouHeaderService, Security_Service_1.SecurityService, router_1.Router])
    ], IouEditComponent);
    return IouEditComponent;
}());
exports.IouEditComponent = IouEditComponent;
//# sourceMappingURL=iouheader-edit.component.js.map