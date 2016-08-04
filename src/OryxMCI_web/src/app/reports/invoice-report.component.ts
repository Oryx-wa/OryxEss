import { Component, OnInit } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';


@Component({
  moduleId: module.id,
  selector: 'app-invoice-report',
  templateUrl: 'invoice-report.component.html',
  styleUrls: ['invoice-report.component.css'],
  directives: [PdfViewerComponent]
})
export class InvoiceReportComponent implements OnInit {
  pdfSrc: string ;
  page: number = 1;
  constructor() {}

  ngOnInit() {
    this.pdfSrc = '/api/InvoiceForTheMonth.pdf'
  }

}
