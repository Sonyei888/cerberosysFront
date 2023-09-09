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

  //obtener los clientes
  obtenerListaDeEmpleados():Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
  }
 
}
