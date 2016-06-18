import { bootstrap }    from '@angular/platform-browser-dynamic';
import {LocalStorageService, LocalStorageSubscriber} from 'angular2-localstorage/LocalStorageEmitter';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';

// Our main component
import { AppComponent } from './app.component';
//Configuration component 
import { Configuration } from './app.constants';



bootstrap(AppComponent,[
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    LocalStorageService, 
     Configuration
     ]);