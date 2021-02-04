import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    constructor(
        public dashboardService: DashboardService
    ) { }

    ngOnInit() {
        this.dashboardService.loadChart();
    }

}
