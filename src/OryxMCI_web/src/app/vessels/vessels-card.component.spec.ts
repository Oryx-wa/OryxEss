/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { VesselsCardComponent } from './vessels-card.component';

describe('Component: VesselsCard', () => {
  it('should create an instance', () => {
    let component = new VesselsCardComponent();
    expect(component).toBeTruthy();
  });
});
