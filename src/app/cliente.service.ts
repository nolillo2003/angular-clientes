import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
//import { CLIENTES } from './clientes/clientes.json';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndpoint: string = 'http://localhost:8080/api/clientes';
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getClientes(): Observable<Cliente[]> {
    //return of(CLIENTES);
    return this.http.get<Cliente[]>(this.urlEndpoint);
  }
}
