/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { VesselsDetailsComponent } from './vessels-details.component';

describe('Component: VesselsDetails', () => {
  it('should create an instance', () => {
    let component = new VesselsDetailsComponent();
    expect(component).toBeTruthy();
  });
});
