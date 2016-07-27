/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PortsDetailsComponent } from './Ports-details.component';

describe('Component: PortsDetails', () => {
  it('should create an instance', () => {
    let component = new PortsDetailsComponent();
    expect(component).toBeTruthy();
  });
});
