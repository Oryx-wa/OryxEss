/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AgentsCardComponent } from './agents-card.component';

describe('Component: AgentsCard', () => {
  it('should create an instance', () => {
    let component = new AgentsCardComponent();
    expect(component).toBeTruthy();
  });
});
