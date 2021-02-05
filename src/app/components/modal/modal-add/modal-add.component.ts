import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientesService } from '../../clientes/clientes.service';
import { DashboardService } from '../../dashboard/dashboard.service';
import { Cliente } from '../../clientes/clientes.model';

@Component({
    selector: 'app-modal-add',
    templateUrl: './modal-add.component.html',
    styleUrls: ['./modal-add.component.css']
})
export class ModalAddComponent implements OnInit {

    clientes: Cliente[];

    cliente: Cliente = {
        id: null,
        nome: '',
        tel: '',
        cadastro: ''
    };

    constructor(
        @Inject(MAT_DIALOG_DATA)
        private clienteService: ClientesService,
        private dashboardService: DashboardService,
        private modal: MatDialog
    ) { }

    ngOnInit(): void {
        this.clienteService.getClientes().subscribe(
            clientes => {
                this.clientes = clientes;
            }
        );
    }

    async createCliente() {
        await this.clienteService.postCliente(this.cliente).toPromise();
        this.clienteService.showMessage('Cliente cadastrado!');
        this.modal.closeAll();
        this.ngOnInit();
        this.dashboardService.loadChart();
    }

    closeModal() {
        this.modal.closeAll();
    }

}
