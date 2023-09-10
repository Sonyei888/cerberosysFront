import { Component, OnInit } from '@angular/core';
import { ClienteService } from './../cliente.service';
import { Cliente } from '../cliente';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-detalles',
  templateUrl: './cliente-detalles.component.html',
  styleUrls: ['./cliente-detalles.component.css']
})
export class ClienteDetallesComponent implements OnInit {

  id: number;
  cliente: Cliente = new Cliente();

  constructor(private route: ActivatedRoute, private clienteServicio: ClienteService) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; // Use "+" to convert id to a number
    this.clienteServicio.obtenerClientePorId(this.id).subscribe((dato: Cliente) => {
      this.cliente = dato;
    });
  }
}
