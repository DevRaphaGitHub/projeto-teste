import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Observable } from 'rxjs';
import { Cliente } from '../clientes/clientes.model';
import { BaseChartDirective } from 'ng2-charts';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

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
    
    baseUrl = "http://localhost:3000/clientes";

    @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

    constructor(private http: HttpClient) { }

    getCadastros(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.baseUrl);
    }

    async loadChart() {
        let clientes = await this.getCadastros().toPromise();
        this.dataGraphic = clientes.length;
        this.lineChartData = [
            {
                data: [this.dataGraphic, this.dataGraphic, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Total de cadastros por mês'
            }
        ];
    }
}
