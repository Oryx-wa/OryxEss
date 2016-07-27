/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PortsCardComponent } from './ports-card.component';

describe('Component: PortsCard', () => {
  it('should create an instance', () => {
    let component = new PortsCardComponent();
    expect(component).toBeTruthy();
  });
});
