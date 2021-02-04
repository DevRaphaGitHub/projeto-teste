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

    getByIdCliente(id: number): Observable<Cliente> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<Cliente>(url);
    }
}
