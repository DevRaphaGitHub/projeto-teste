import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';
import { Cliente } from '../clientes/clientes.model';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    cadastros: Cliente[];

    dataGraphic!: number;

    public lineChartData: ChartDataSets[] = [];
    public lineChartLabels: Label[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    public lineChartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };
    public lineChartColors: Color[] = [
        { // red
            backgroundColor: 'rgba(255,0,0,0.2)',
            borderWidth: 1,
            borderColor: 'red',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend = true;
    public lineChartType: ChartType = 'bar';

    @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

    constructor(
        private dashboardService: DashboardService
    ) { }

    async ngOnInit() {

        let clientes = await this.dashboardService.getCadastros().toPromise();
        this.dataGraphic = clientes.length;

        this.lineChartData = [{ data: [this.dataGraphic, this.dataGraphic, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Informações' }];
    }

}
