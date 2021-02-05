import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from '../../clientes/clientes.model';
import { ClientesService } from '../../clientes/clientes.service';
import { DashboardService } from '../../dashboard/dashboard.service';
import { ModalService } from '../modal.service';

@Component({
    selector: 'app-modal-confirm',
    templateUrl: './modal-confirm.component.html',
    styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {

    clientes: Cliente[];

    selectedCliente = this.data;

    constructor(
        @Inject(MAT_DIALOG_DATA)
        public data: Cliente,
        private clienteService: ClientesService,
        private modalService: ModalService,
        private modal: MatDialog,
        private dashboardService: DashboardService
    ) { }

    ngOnInit(): void {
        this.clienteService.getClientes().subscribe(
            clientes => {
                this.clientes = clientes;
            }
        );
    }

    async deleteCliente(id: number) {
        await this.modalService.deleteCliente(id).toPromise();
        this.clienteService.showMessage('Cliente excluído!');
        this.modal.closeAll();
        this.ngOnInit();
        this.dashboardService.loadChart();
    }

    closeModal() {
        this.modal.closeAll();
    }

}
