import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from '../cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  private clientes: Cliente[] = [];
  private clienteService: ClienteService;

  constructor(service: ClienteService) {
    //this.clientes = service.getClientes();
    this.clienteService = service;
    this.clienteService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    });


  }

  ngOnInit() {
  }

  public delete(cliente: Cliente): void {
    swal.fire({
      title: 'Eliminar cliente',
      html: `¿Desea eliminar el cliente ${cliente.nombre}`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.clienteService.delete(cliente.id).subscribe((response) =>{

          this.clientes = this.clientes.filter((cli) => cli !== cliente);

          swal.fire({
            title: 'Eliminar cliente',
            html: `Cliente ${cliente.nombre} eliminado con éxito`,
            type: 'success',
            timer: 2500
          });
        });
      }
    });
  }

}
