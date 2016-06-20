System.register(['@angular/core', '@angular/router', './iouheader.service'], function(exports_1, context_1) {
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
    var core_1, router_1, iouheader_service_1;
    var IouListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (iouheader_service_1_1) {
                iouheader_service_1 = iouheader_service_1_1;
            }],
        execute: function() {
            IouListComponent = (function () {
                function IouListComponent(_iouHeaderService) {
                    this._iouHeaderService = _iouHeaderService;
                    this.pageTitle = 'My iou List';
                    this.imageWidth = 50;
                    this.imageMargin = 2;
                    this.showImage = false;
                    this.listFilter = '';
                }
                IouListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                IouListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._iouHeaderService.getIous()
                        .subscribe(function (iouHeaders) { return _this.iouHeaders = iouHeaders; }, function (error) { return _this.errorMessage = error; });
                };
                IouListComponent.prototype.onRatingClicked = function (message) {
                    this.pageTitle = 'iou List: ' + message;
                };
                IouListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/iou/iouheader-list.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [iouheader_service_1.iouHeaderService])
                ], IouListComponent);
                return IouListComponent;
            }());
            exports_1("IouListComponent", IouListComponent);
        }
    }
});
//# sourceMappingURL=iouHeader-list.component.js.map