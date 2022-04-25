import { Component, OnInit } from '@angular/core';
import { Report } from '../report';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent implements OnInit {
  report!: Report[];

  constructor(private service: ReportService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe((data) => (this.report = data));
  }

}
