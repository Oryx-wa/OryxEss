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
var router_1 = require('@angular/router');
var iouheader_service_1 = require('./iouheader.service');
var security_service_1 = require('../services/security.service');
var IouCreateComponent = (function () {
    function IouCreateComponent(_iouHeaderService, securityService, _router) {
        this._iouHeaderService = _iouHeaderService;
        this.securityService = securityService;
        this._router = _router;
        this.message = "IOU Create";
    }
    IouCreateComponent.prototype.ngOnInit = function () {
        this.iouHeaders = { Id: 0, Name: "", Description: "" };
        console.log("IsAuthorized:" + this.securityService.IsAuthorized);
        console.log("HasAdminRole:" + this.securityService.HasAdminRole);
    };
    IouCreateComponent.prototype.Create = function () {
        var _this = this;
        this._iouHeaderService
            .Add(this.iouHeaders)
            .subscribe(function (data) { return _this.iouHeaders = data; }, function (error) { return _this.securityService.HandleError(error); }, function () { return _this._router.navigate(['/']); });
    };
    IouCreateComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/iou/iouheader-list.component.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [iouheader_service_1.iouHeaderService, security_service_1.SecurityService, router_1.Router])
    ], IouCreateComponent);
    return IouCreateComponent;
}());
exports.IouCreateComponent = IouCreateComponent;
//# sourceMappingURL=iouheader-create.component.js.map