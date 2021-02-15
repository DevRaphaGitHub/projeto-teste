import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DashboardService } from '../../dashboard/dashboard.service';
import { Cliente } from '../../clientes/clientes.model';
import { ModalService } from '../modal.service';

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
        tel: ''
    };

    constructor(
        @Inject(MAT_DIALOG_DATA)
        public dashboardService: DashboardService,
        private modalService: ModalService,
        private modal: MatDialog
    ) { }

    async ngOnInit() {
        this.modalService.getClientes();
    }

    async createCliente() {
        await this.modalService.postCliente(this.cliente).toPromise();
        this.modalService.showMessage('Cliente cadastrado!');
        this.modal.closeAll();
        this.ngOnInit();
        this.modalService.loadGraphic();
    }

    closeModal() {
        this.modal.closeAll();
    }

}
