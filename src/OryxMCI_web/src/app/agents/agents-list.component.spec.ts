/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AgentsListComponent } from './agents-list.component';

describe('Component: AgentsList', () => {
  it('should create an instance', () => {
    let component = new AgentsListComponent();
    expect(component).toBeTruthy();
  });
});
