import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from '../../clientes/clientes.model';
import { ClientesService } from '../../clientes/clientes.service';
import { ModalService } from '../modal.service';

@Component({
    selector: 'app-modal-edit',
    templateUrl: './modal-edit.component.html',
    styleUrls: ['./modal-edit.component.css']
})

export class ModalEditComponent implements OnInit {

    clientes: Cliente[];

    selectedCliente = this.data;

    constructor(
        @Inject(MAT_DIALOG_DATA)
        public data: Cliente,
        private clienteService: ClientesService,
        private modalService: ModalService,
        private modal: MatDialog
    ) { }

    ngOnInit(): void {
        this.clienteService.getClientes().subscribe(
            clientes => {
                this.clientes = clientes;
            }
        );
    }

    async updateCliente(cliente: Cliente) {
        await this.modalService.putCliente(cliente).toPromise();
        this.clienteService.showMessage('Cliente atualizado!');
        this.modal.closeAll();
        this.ngOnInit();
    }

    closeModal() {
        this.modal.closeAll();
    }
}
