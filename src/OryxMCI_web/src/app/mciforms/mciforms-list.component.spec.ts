/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MciFormsListComponent } from './mciforms-list.component';

describe('Component: MciFormsList', () => {
  it('should create an instance', () => {
    let component = new MciFormsListComponent();
    expect(component).toBeTruthy();
  });
});
