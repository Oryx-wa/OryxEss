import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
//import "angular2-materialize";

import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,[ 
    APP_ROUTER_PROVIDERS,
    disableDeprecatedForms(),
    provideForms()
])
.then(
    success => console.log('AppComponent bootstrapped!')

)
 .catch((err: any) => console.error(err));;

