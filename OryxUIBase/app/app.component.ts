import { Component } from "angular2/core";
import {oryxFrameworkComponent} from './ext-module/oryxframework/oryxframework.component';


import {AgentFormComponent} from "./agents/agent-form.component";
//import {InspectorFormComponent} from "./inspector/inspector-form.component";




@Component({
    selector: 'mci-app',
   // template: '<div><h3>{{pageTittle}}</h3></div>',
  templateUrl :'app/app.component.html',
    //template:'<inspector-form></inspector-form>',
    directives: [oryxFrameworkComponent,AgentFormComponent]
    
})

export class AppComponent {
    pageTitle = "Oryx West Africa";
}