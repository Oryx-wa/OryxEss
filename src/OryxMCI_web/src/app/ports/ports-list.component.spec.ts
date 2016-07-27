/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PortsListComponent } from './ports-list.component';

describe('Component: PortsList', () => {
  it('should create an instance', () => {
    let component = new PortsListComponent();
    expect(component).toBeTruthy();
  });
});
