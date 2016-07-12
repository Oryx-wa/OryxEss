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
import { WorkflowTriggerCardComponent } from './workflow-trigger-card.component';

describe('Component: WorkflowTriggerCard', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [WorkflowTriggerCardComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([WorkflowTriggerCardComponent],
      (component: WorkflowTriggerCardComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(WorkflowTriggerCardComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(WorkflowTriggerCardComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-workflow-trigger-card></app-workflow-trigger-card>
  `,
  directives: [WorkflowTriggerCardComponent]
})
class WorkflowTriggerCardComponentTestController {
}

