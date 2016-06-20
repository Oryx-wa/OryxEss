webpackJsonp([0],[
/* 0 */
/*!*********************!*\
  !*** ./app/main.ts ***!
  \*********************/
/***/ function(module, exports) {

	System.register(['@angular/platform-browser-dynamic', 'angular2-localstorage/LocalStorageEmitter', '@angular/http', '@angular/router', './app.component', './app.constants'], function(exports_1, context_1) {
	    "use strict";
	    var __moduleName = context_1 && context_1.id;
	    var platform_browser_dynamic_1, LocalStorageEmitter_1, http_1, router_1, app_component_1, app_constants_1;
	    return {
	        setters:[
	            function (platform_browser_dynamic_1_1) {
	                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
	            },
	            function (LocalStorageEmitter_1_1) {
	                LocalStorageEmitter_1 = LocalStorageEmitter_1_1;
	            },
	            function (http_1_1) {
	                http_1 = http_1_1;
	            },
	            function (router_1_1) {
	                router_1 = router_1_1;
	            },
	            function (app_component_1_1) {
	                app_component_1 = app_component_1_1;
	            },
	            function (app_constants_1_1) {
	                app_constants_1 = app_constants_1_1;
	            }],
	        execute: function() {
	            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
	                router_1.ROUTER_PROVIDERS,
	                http_1.HTTP_PROVIDERS,
	                LocalStorageEmitter_1.LocalStorageService,
	                app_constants_1.Configuration
	            ]);
	        }
	    }
	});


/***/ }
]);
//# sourceMappingURL=app.bundle.js.map