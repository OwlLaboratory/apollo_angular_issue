import {Component, OnInit} from '@angular/core';
import {ReportService} from './report.service';
import {FacebookQuery} from './graphql/facebook.graphql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public reportService: ReportService) {
  }

  ngOnInit(): void {
    this.reportService.loadCampaign('5ad0ba987d032');
  }

  fetchMore() {
    this.reportService.fetchCampaignData(FacebookQuery);
  }
}
