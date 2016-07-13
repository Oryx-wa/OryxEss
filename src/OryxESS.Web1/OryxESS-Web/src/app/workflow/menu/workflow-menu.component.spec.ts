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
import { WorkflowMenuComponent } from './workflow-menu.component';

describe('Component: WorkflowMenu', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [WorkflowMenuComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([WorkflowMenuComponent],
      (component: WorkflowMenuComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(WorkflowMenuComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(WorkflowMenuComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-workflow-menu></app-workflow-menu>
  `,
  directives: [WorkflowMenuComponent]
})
class WorkflowMenuComponentTestController {
}

