/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AgentsDetailsComponent } from './agents-details.component';

describe('Component: AgentsDetails', () => {
  it('should create an instance', () => {
    let component = new AgentsDetailsComponent();
    expect(component).toBeTruthy();
  });
});
