import {Component} from 'angular2/core';

import {InspectorList} from './inspector-list.component';

@Component({
    selector: 'my-inspector',
   // templateUrl:'app/inspector/inspector.component.html',
   template: '<my-inspector-list></my-inspector-list>',
    directives: [InspectorList]
})

export class InspectorComponent {

}