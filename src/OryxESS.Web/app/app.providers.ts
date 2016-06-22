import { bind } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';
import {SecurityService} from './services/security.service';
import {iouHeaderService} from './iou/iouheader.service';
import { Configuration } from './app.constants';

export const APP_PROVIDERS = [
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    SecurityService,
    iouHeaderService,
    Configuration
    //bind(LocationStrategy).toClass(HashLocationStrategy)
];