import { bind } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';
import {SecurityService} from './login/security.service';
import {IouService} from './iou/shared/iou.service';
import { Configuration } from './app.constants';
import { DialogService }  from './services/dialog.service';
import { AuthGuard }          from './login/auth.guard';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';


export const APP_PROVIDERS = [
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    SecurityService,
    IouService,
    Configuration,
    AuthGuard,
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    //DisplayEnum
    //bind(LocationStrategy).toClass(HashLocationStrategy)
];