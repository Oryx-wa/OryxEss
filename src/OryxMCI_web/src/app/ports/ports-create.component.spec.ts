/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PortsCreateComponent } from './ports-create.component';

describe('Component: PortsCreate', () => {
  it('should create an instance', () => {
    let component = new PortsCreateComponent();
    expect(component).toBeTruthy();
  });
});
