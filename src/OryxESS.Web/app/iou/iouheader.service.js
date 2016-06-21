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
var http_1 = require('@angular/http');
var app_constants_1 = require('../app.constants');
var security_service_1 = require('../services/security.service');
var iouHeaderService = (function () {
    function iouHeaderService(_http, _configuration, _securityService) {
        var _this = this;
        this._http = _http;
        this._configuration = _configuration;
        this._securityService = _securityService;
        this.GetAll = function () {
            _this.setHeaders();
            return _this._http.get(_this.actionUrl, {
                headers: _this.headers
            }).map(function (res) { return res.json(); });
        };
        this.GetById = function (id) {
            _this.setHeaders();
            return _this._http.get(_this.actionUrl + id, {
                headers: _this.headers
            }).map(function (res) { return res.json(); });
        };
        this.Add = function (itemToAdd) {
            _this.setHeaders();
            return _this._http.post(_this.actionUrl, JSON.stringify(itemToAdd), { headers: _this.headers });
        };
        this.Update = function (id, itemToUpdate) {
            _this.setHeaders();
            return _this._http
                .put(_this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: _this.headers });
        };
        this.Delete = function (id) {
            _this.setHeaders();
            return _this._http.delete(_this.actionUrl + id, {
                headers: _this.headers
            });
        };
        this.actionUrl = _configuration.apiServer + "api/iou/";
    }
    iouHeaderService.prototype.setHeaders = function () {
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        var token = this._securityService.GetToken();
        if (token !== "") {
            this.headers.append('Authorization', 'Bearer ' + token);
        }
    };
    iouHeaderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration, security_service_1.SecurityService])
    ], iouHeaderService);
    return iouHeaderService;
}());
exports.iouHeaderService = iouHeaderService;
//# sourceMappingURL=iouheader.service.js.map