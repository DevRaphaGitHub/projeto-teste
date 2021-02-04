import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../clientes/clientes.model';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    baseUrl = "http://localhost:3000/clientes";

    constructor(private http: HttpClient) { }

    getCadastros(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.baseUrl);
    }
}
