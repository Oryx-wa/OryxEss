/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PortsEditComponent } from './ports-edit.component';

describe('Component: PortsEdit', () => {
  it('should create an instance', () => {
    let component = new PortsEditComponent();
    expect(component).toBeTruthy();
  });
});
