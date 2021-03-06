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
var IouListComponent = (function () {
    function IouListComponent(_iouHeaderService, securityService) {
        this._iouHeaderService = _iouHeaderService;
        this.securityService = securityService;
        this.pageTitle = 'My iou List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.listFilter = '';
        this.message = "IOU Headers";
    }
    IouListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    IouListComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    IouListComponent.prototype.Delete = function (id) {
        var _this = this;
        console.log("Try to delete" + id);
        this._iouHeaderService.Delete(id)
            .subscribe((function () { return console.log("subscribed"); }), function (error) { return _this.securityService.HandleError(error); }, function () { return _this.getData(); });
    };
    IouListComponent.prototype.getData = function () {
        var _this = this;
        console.log('iouHeaderListComponent:getData starting...');
        this._iouHeaderService
            .GetAll()
            .subscribe(function (data) { return _this.iouHeaders = data; }, function (error) { return _this.securityService.HandleError(error); }, function () { return console.log('Get all completed'); });
    };
    IouListComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/iou/iouheader-list.component.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [iouheader_service_1.iouHeaderService, security_service_1.SecurityService])
    ], IouListComponent);
    return IouListComponent;
}());
exports.IouListComponent = IouListComponent;
//# sourceMappingURL=iouheader-list.component.js.map