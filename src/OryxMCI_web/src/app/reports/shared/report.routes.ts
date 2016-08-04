import { RouterConfig } from '@angular/router';
import {ReportsComponent} from '../reports.component'
import {InvoiceReportComponent} from '../invoice-report.component'
import { CanDeactivateGuard }    from '../../interfaces';
import { AuthGuard}             from '../../login/auth.guard';

export const ReportsRoutes: RouterConfig = [
    { path: '', component: ReportsComponent, pathMatch:"full"},
    { path: 'reports', component: ReportsComponent},
    { path: 'Invoice', component: InvoiceReportComponent},   
]