import {Component, Input } from "angular2/core";

import { oryxMenuComponent } from  "../oryxmenu/oryxmenu.component";
import { oryxDashboardComponent } from  "../oryxdashboard/oryxdashboard.component";

@Component({
    selector: 'oryx-framework',
    templateUrl: 'app/ext-module/oryxframework/oryxframework.component.html',
    styleUrls: ['app/ext-module/oryxframework/oryxframework.component.css'],
    directives: [oryxMenuComponent, oryxDashboardComponent]
})

export class oryxFrameworkComponent {
    @Input() title: string;
    @Input() subtitle: string;
    @Input() iconfile: string;
}