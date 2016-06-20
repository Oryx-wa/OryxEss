System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var BerthFilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BerthFilterPipe = (function () {
                function BerthFilterPipe() {
                }
                BerthFilterPipe.prototype.transform = function (value, filter) {
                    filter = filter ? filter.toLocaleLowerCase() : null;
                    return filter ? value.filter(function (berth) {
                        return berth.Name.toLocaleLowerCase().indexOf(filter) !== -1;
                    }) : value;
                };
                BerthFilterPipe = __decorate([
                    core_1.Pipe({
                        name: 'berthFilter'
                    }), 
                    __metadata('design:paramtypes', [])
                ], BerthFilterPipe);
                return BerthFilterPipe;
            }());
            exports_1("BerthFilterPipe", BerthFilterPipe);
        }
    }
});
//# sourceMappingURL=berth-filter.pipe.js.map