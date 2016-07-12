import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { WorkflowTriggerFormComponent } from './workflow-trigger-form.component';

describe('Component: WorkflowTriggerForm', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [WorkflowTriggerFormComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([WorkflowTriggerFormComponent],
      (component: WorkflowTriggerFormComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(WorkflowTriggerFormComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(WorkflowTriggerFormComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-workflow-trigger-form></app-workflow-trigger-form>
  `,
  directives: [WorkflowTriggerFormComponent]
})
class WorkflowTriggerFormComponentTestController {
}

