import { Component } from "angular2/core";
import { oryxFrameworkComponent } from "./ext-module/oryxframework/oryxframework.component";

@Component({
    selector: 'mci-app',
    templateUrl: 'app/app.component.html',
    directives: [oryxFrameworkComponent]
})

export class AppComponent {
    pageTitle = "Oryx West Africa";
}