import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from '../../clientes/clientes.model';

interface DialogData {
    cliente: Cliente
}

@Component({
    selector: 'app-modal-edit',
    templateUrl: './modal-edit.component.html',
    styleUrls: ['./modal-edit.component.css']
})

export class ModalEditComponent implements OnInit {

    selectedCliente = this.data.cliente;

    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { } //private clientesService: ClientesService

    ngOnInit(): void {
        this.selectedCliente.id;

        // this.clientesService.getByIdCliente(this.selectedCliente.id).subscribe(selectedCliente => {
        //  this.cliente = selectedCliente;
        // });
    }
}
