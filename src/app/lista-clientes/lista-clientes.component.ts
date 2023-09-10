import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent {

  clientes:Cliente[];

  constructor(private clienteServicio:ClienteService, private router:Router) { }

  ngOnInit(): void{
    this.obtenerClientes();
  }

actualizarCliente(id:number){
this.router.navigate(['actualizar-cliente', id]);
}


eliminarCliente(id:number){
    this.clienteServicio.eliminarCliente(id).subscribe(dato => {
    console.log(dato);
    this.obtenerClientes();
  });
}

private obtenerClientes(){
  this.clienteServicio.obtenerListaDeClientes().subscribe(dato=>{
  this.clientes = dato;
  });

}

verDetallesCliente(id:number){
    this.router.navigate(['cliente-detalles',id]);
  }

}

