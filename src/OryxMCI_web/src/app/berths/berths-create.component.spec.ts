/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BerthsCreateComponent } from './berths-create.component';

describe('Component: BerthsCreate', () => {
  it('should create an instance', () => {
    let component = new BerthsCreateComponent();
    expect(component).toBeTruthy();
  });
});
