/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { InspectorsCreateComponent } from './inspectors-create.component';

describe('Component: InspectorsCreate', () => {
  it('should create an instance', () => {
    let component = new InspectorsCreateComponent();
    expect(component).toBeTruthy();
  });
});
