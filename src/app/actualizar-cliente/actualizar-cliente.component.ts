import  swal  from 'sweetalert2';
import { SwaAuthModule } from '@christianacca/angular-swa-auth';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from './../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {

  id:number;
  cliente:Cliente = new Cliente();
  constructor(private clienteService:ClienteService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteService.obtenerClientePorId(this.id).subscribe(dato =>{
      this.cliente = dato;
    },error => console.log(error));
  }

  irAlaListaDeEmpleados() {
    swal('Cliente actualizado', `El cliente ${this.cliente.nombre} ha sido actualizado con éxito`, 'success').then(() => {
      this.router.navigate(['/clientes']);
    });
  }


  onSubmit(){
    this.clienteService.actualizarCliente(this.id,this.cliente).subscribe(dato => {
      this.irAlaListaDeEmpleados();
    },error => console.log(error));
  }
}



