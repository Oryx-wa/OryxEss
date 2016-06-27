import { AuthGuard }          from './auth.guard';
import { SecurityService }        from './security.service';
import { LoginComponent }     from './login.component';
import {ForbiddenComponent} from '../forbidden/forbidden.component';
import {UnauthorizedComponent} from '../unauthorized/unauthorized.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { Configuration } from '../app.constants';

export const LoginRoutes = [
  { path: 'login', component: LoginComponent },
  { path: 'forbidden',  component: ForbiddenComponent },
  { path: 'unauthorized',  component: UnauthorizedComponent },
];

export const AUTH_PROVIDERS = [AuthGuard, 
  SecurityService, 
  HTTP_PROVIDERS,
  Configuration];


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/