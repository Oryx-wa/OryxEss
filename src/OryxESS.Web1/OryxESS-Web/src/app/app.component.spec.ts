/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { AppComponent } from './app.component';

beforeEachProviders(() => [AppComponent]);

describe('App: OryxESSWeb', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'app works!\'',
      inject([AppComponent], (app: AppComponent) => {
    expect(app.title).toEqual('app works!');
  }));

  it('should have as title \'Oryx ESS!\'',
      inject([AppComponent], (app: AppComponent) => {
    expect(app.pageTitle).toEqual('Oryx ESS!');
  }));
});
