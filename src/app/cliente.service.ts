import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //Esta url obtine el listado de clientes en el back-end
  private baseURL = "http://localhost:8092/api/v1/clientes";

  constructor(private httpClient : HttpClient) { }

  // obtener los clientes

  obtenerListaDeClientes():Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
  }

  //registrar un clientes

  registrarCliente(cliente:Cliente) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,cliente);
  }

  //actualizar el clientes

  actualizarCliente(id:number,cliente:Cliente) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,cliente);
  }

  //obtener o buscar un clientes

  obtenerClientePorId(id:number):Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.baseURL}/${id}`);
  }


  eliminarCliente(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
