import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cliente } from '../clientes/clientes.model';
import { ClientesService } from '../clientes/clientes.service';
import { DashboardService } from '../dashboard/dashboard.service';
import { ModalConfirmComponent } from '../modal/modal-confirm/modal-confirm/modal-confirm.component';
import { ModalEditComponent } from '../modal/modal-edit/modal-edit.component';

@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.component.html',
    styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {

    clientes: Cliente[];

    listMonths: Array<any>;

    displayedColumns = ['id', 'nome', 'tel', 'cadastro', 'actions'];

    cliente: Cliente = {
        id: null,
        nome: '',
        tel: '',
        cadastro: ''
    }

    constructor(
        private clientesService: ClientesService,
        public modal: MatDialog,
        private dashboardService: DashboardService,
        // private baseResource: BaseResourceModel,
    ) { }

    async ngOnInit() {
        this.listMonths = [
            { codigo: "Jan", descricao: "Janeiro" },
            { codigo: "Fev", descricao: "Fevereiro" },
            { codigo: "Mar", descricao: "Março" },
            { codigo: "Abr", descricao: "Abril" },
            { codigo: "Mai", descricao: "Maio" },
            { codigo: "Jun", descricao: "Junho" },
            { codigo: "Jul", descricao: "Julho" },
            { codigo: "Ago", descricao: "Agosto" },
            { codigo: "Set", descricao: "Setembro" },
            { codigo: "Out", descricao: "Outubro" },
            { codigo: "Nov", descricao: "Novembro" },
            { codigo: "Dez", descricao: "Dezembro" },
        ];

        // setTimeout(() => this.listMonths = this.baseResource.optionsMonths())

        this.clientesService.getClientes().subscribe(
            clientes => {
                this.clientes = clientes;
            }
        )
    }

    async createCliente() {
        await this.clientesService.postCliente(this.cliente).toPromise();
        this.clientesService.showMessage('Cliente cadastrado!');
        this.ngOnInit();
        this.dashboardService.loadChart();
    }

    async deleteCliente(id: number) {
        await this.clientesService.deleteCliente(id).toPromise();
        this.clientesService.showMessage('Cliente excluído!');
        this.ngOnInit();
        this.dashboardService.loadChart();
    }

    async updateCliente(cliente: Cliente) {
        await this.clientesService.putCliente(cliente).toPromise();
        this.clientesService.showMessage('Cliente atualizado!');
        this.ngOnInit();
    }

    async openModalEdit(id: number) {
        let modal = await this.modal.open(ModalEditComponent, {
            data: await this.clientesService.getByIdCliente(id).toPromise()
        });
        await modal.afterClosed().toPromise();
        this.ngOnInit();
    }

    async openModalConfirm(id: number) {
        let modal = await this.modal.open(ModalConfirmComponent, {
            data: await this.clientesService.getByIdCliente(id).toPromise()
        });
        await modal.afterClosed().toPromise();
        this.ngOnInit();
    }

    // pushMonths() {
    //     // this.clientesService.getMonths();
    //     this.ngOnInit();
    // }
}

