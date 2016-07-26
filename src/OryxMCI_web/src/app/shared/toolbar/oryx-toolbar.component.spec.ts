/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { OryxToolbarComponent } from './oryx-toolbar.component';

describe('Component: OryxToolbar', () => {
  it('should create an instance', () => {
    let component = new OryxToolbarComponent();
    expect(component).toBeTruthy();
  });
});
