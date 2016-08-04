import { Component, OnInit } from '@angular/core';
import {InvoiceReportComponent} from './invoice-report.component'

@Component({
  moduleId: module.id,
  selector: 'app-reports',
  templateUrl: 'reports.component.html',
  styleUrls: ['reports.component.css'],
  directives:[InvoiceReportComponent]
})
export class ReportsComponent implements OnInit {
  Invoice: boolean = true;
  constructor() {}

  ngOnInit() {
  }
  showReport(){

  }

}
