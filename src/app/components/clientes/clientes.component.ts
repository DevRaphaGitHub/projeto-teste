import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../clientes/clientes.model';
import { ClientesService } from '../clientes/clientes.service';
import { ModalEditComponent } from '../modal/modal-edit/modal-edit.component';

@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.component.html',
    styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {

    clientes: Cliente[];

    selectedCliente: Cliente;

    displayedColumns = ['id', 'nome', 'tel', 'actions'];

    cliente: Cliente = {
        id: 0,
        nome: '',
        tel: ''
    }

    constructor(private clientesService: ClientesService, private route: ActivatedRoute, public modal: MatDialog) { }

    ngOnInit(): void {
        this.clientesService.getClientes().subscribe(
            clientes => {
                this.clientes = clientes;
            }
        )

        const id = +this.route.snapshot.paramMap.get('id');
        this.clientesService.getByIdCliente(id).subscribe(selectedCliente => {
            this.selectedCliente = selectedCliente;
        });
    }

    async createCliente() {
        await this.clientesService.postCliente(this.cliente).toPromise();
        this.clientesService.showMessage('Cliente cadastrado!');
        this.ngOnInit();
    }

    async deleteCliente(id: number) {
        await this.clientesService.deleteCliente(id).toPromise();
        this.clientesService.showMessage('Cliente excluído!');
        this.ngOnInit();
    }

    async updateCliente(cliente: Cliente) {
        await this.clientesService.putCliente(cliente).toPromise();
        this.clientesService.showMessage('Cliente atualizado!');
        this.ngOnInit();
    }

    openModal(rowId: number) {
        this.modal.open(ModalEditComponent, { data: this.clientes[rowId] });
    }
}

