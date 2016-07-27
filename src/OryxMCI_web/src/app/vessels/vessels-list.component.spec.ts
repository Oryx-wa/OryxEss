/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { VesselsListComponent } from './vessels-list.component';

describe('Component: VesselsList', () => {
  it('should create an instance', () => {
    let component = new VesselsListComponent();
    expect(component).toBeTruthy();
  });
});
