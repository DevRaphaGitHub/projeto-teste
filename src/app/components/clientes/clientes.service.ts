import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Cliente } from './clientes.model';

@Injectable({
    providedIn: 'root'
})
export class ClientesService {

    baseUrl = "http://localhost:3000/clientes";

    constructor(
        private http: HttpClient,
        private snackBar: MatSnackBar
    ) { }

    // SNACK BAR DE CONFIRMAÇÃO
    showMessage(msg: string) {
        this.snackBar.open(msg, 'FECHAR', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        });
    }

    // GET ALL
    getClientes(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.baseUrl);
    }

    // GET BY ID
    getByIdCliente(id: number): Observable<Cliente> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<Cliente>(url);
    }

    // POST
    postCliente(cliente: Cliente): Observable<Cliente[]> {
        return this.http.post<Cliente[]>(this.baseUrl, cliente);
    }

    // PUT
    putCliente(cliente: Cliente): Observable<Cliente> {
        const url = `${this.baseUrl}/${cliente.id}`;
        return this.http.put<Cliente>(url, cliente);
    }

    // DELETE
    deleteCliente(id: number): Observable<Cliente> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<Cliente>(url);
    }

}
