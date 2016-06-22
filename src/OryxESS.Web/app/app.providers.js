"use strict";
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var security_service_1 = require('./services/security.service');
var iouheader_service_1 = require('./iou/iouheader.service');
var app_constants_1 = require('./app.constants');
exports.APP_PROVIDERS = [
    common_1.FORM_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    security_service_1.SecurityService,
    iouheader_service_1.iouHeaderService,
    app_constants_1.Configuration
];
//# sourceMappingURL=app.providers.js.map