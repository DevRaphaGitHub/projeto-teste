import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../clientes/clientes.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

    baseUrl = "http://localhost:3000/clientes";

    constructor(private http: HttpClient) { }

    getClientes(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.baseUrl);
    }

    getByIdCliente(id: number): Observable<Cliente> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<Cliente>(url);
    }

    postCliente(cliente: Cliente): Observable<Cliente[]> {
        return this.http.post<Cliente[]>(this.baseUrl, cliente);
    }

    putCliente(cliente: Cliente): Observable<Cliente> {
        const url = `${this.baseUrl}/${cliente.id}`;
        return this.http.put<Cliente>(url, cliente);
    }

    deleteCliente(id: number): Observable<Cliente> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<Cliente>(url);
    }
}
