/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { InvoiceReportComponent } from './invoice-report.component';

describe('Component: InvoiceReport', () => {
  it('should create an instance', () => {
    let component = new InvoiceReportComponent();
    expect(component).toBeTruthy();
  });
});
