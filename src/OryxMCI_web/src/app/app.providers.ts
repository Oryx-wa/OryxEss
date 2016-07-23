import { bind } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';

import {SecurityService} from './login/security.service';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';

import {ServiceBase} from './shared/service-base';
 import {IModelBase} from './shared/imodel-base';

import { Configuration } from './app.constants';
import { DialogService }  from './services/dialog.service';
import { AuthGuard }          from './login/auth.guard';

//import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';
//import {ServiceBase} from './shared/service-base';



export const APP_PROVIDERS = [
    
    FORM_PROVIDERS,
    HTTP_PROVIDERS,    
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    SecurityService,
    Configuration,
    AuthGuard,
    PaginationService,
    ServiceBase,
   
   
   

    //DisplayEnum
    //bind(LocationStrategy).toClass(HashLocationStrategy)
];