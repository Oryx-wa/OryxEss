/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BerthsListComponent } from './berths-list.component';

describe('Component: BerthsList', () => {
  it('should create an instance', () => {
    let component = new BerthsListComponent();
    expect(component).toBeTruthy();
  });
});
