System.register(['@angular/core', '@angular/http', 'rxjs/Observable', "angular2-localstorage/WebStorage"], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, WebStorage_1;
    var iouHeaderService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (WebStorage_1_1) {
                WebStorage_1 = WebStorage_1_1;
            }],
        execute: function() {
            iouHeaderService = (function () {
                function iouHeaderService(_http) {
                    this._http = _http;
                    this.appurl = "http://localhost:5300/api";
                    this._iouUrl = "/iou";
                }
                iouHeaderService.prototype.getIous = function () {
                    var reqHeaders = new http_1.Headers();
                    reqHeaders.append("Authorization", "bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNyc2Etc2hhMjU2Iiwia2lkIjoiNkI3QUNDNTIwMzA1QkZEQjRGNzI1MkRBRUIyMTc3Q0MwOTFGQUFFMSIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE0NjYyNjgzMTMsImV4cCI6MTQ2NjI3MTkxMywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Jlc291cmNlcyIsImNsaWVudF9pZCI6Ik9yeXhFU1Mud2ViYXBpIiwic2NvcGUiOiJPcnl4RVNTLndlYmFwaSIsInN1YiI6IjI4MTNkZjM2LTM3NTMtNDg1NC05YzExLTU5OGQ1ZDlhYWFlMCIsImF1dGhfdGltZSI6MTQ2NjI2ODMxMywiaWRwIjoiaWRzcnYiLCJhbXIiOlsicGFzc3dvcmQiXX0.bkt2nsEeX0PUic_WnhlFB7GKcxfH0ZoHdjPwr7I79pANkWE_JXswO9xeemtsGSBNMGp7V_hAQYmsXtwAxqvakqs778Tr8ZAdhG7NDIouLc41fjJv6_sgobx7BCC8AwzL1_WLlcp8fUIm7dB_Juz3QeL6Y8E6YGbklf2wBnfJXus-VhS8aEpP335-OSEwP0YFx7Brd-1LzJpKe7uHJybdY31-5L5VzMJxy9_Y0ujkLfGhdtkt-Zh2cqJO6LaWU6gGtr5SMj2rFj-UZCf5b9M6rky-BSCv3P5wPF3vlAqYAseZwNkaCJPuxU6tY3sY196c6BVC4BcYm98hcg_n9pUq_g");
                    var options = new http_1.RequestOptions({
                        method: http_1.RequestMethod.Get,
                        url: this.appurl + this._iouUrl,
                        headers: reqHeaders
                    });
                    return this._http.get(this.appurl + this._iouUrl, options)
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                iouHeaderService.prototype.getIou = function (id) {
                    return this.getIous()
                        .map(function (IIouHeader) { return IIouHeader.find(function (i) { return i.id === id; }); });
                };
                iouHeaderService.prototype.handleError = function (error) {
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                __decorate([
                    WebStorage_1.LocalStorage(), 
                    __metadata('design:type', Object)
                ], iouHeaderService.prototype, "appurl", void 0);
                iouHeaderService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], iouHeaderService);
                return iouHeaderService;
            }());
            exports_1("iouHeaderService", iouHeaderService);
        }
    }
});
//# sourceMappingURL=iouheader.service.js.map