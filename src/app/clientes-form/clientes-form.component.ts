import { Component, OnInit } from '@angular/core';
import { Cliente } from '../clientes/cliente';
import { ClienteService } from '../cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  private titulo: String = 'Crear/Modificar Cliente';
  private cliente: Cliente = new Cliente();
  private clienteService: ClienteService;
  private router: Router;
  private activatedRoute: ActivatedRoute;

  constructor(clienteService: ClienteService, router: Router, activatedRoute: ActivatedRoute) {
    this.clienteService = clienteService;
    this.router = router;
    this.activatedRoute = activatedRoute;
  }

  ngOnInit() {
    this.cargarCliente();
  }

  public create(): void {

    this.clienteService
      .create(this.cliente)
      .subscribe((response) => {
        this.router.navigate(['/clientes']);
        swal.fire({
          title: 'Nuevo cliente',
          html: `Cliente ${this.cliente.nombre} creado con éxito`,
          type: 'success',
          timer: 2500
        });
      });
  }

  public cargarCliente(): void {

    this.activatedRoute.params.subscribe((params) => {
      let id: Number = params['id'];
      if (id) {
        this.clienteService
          .getCliente(id)
          .subscribe((cliente: Cliente) => {
            this.cliente = cliente;
          });
      }
    });
  }

  public update(): void {
    this.clienteService
      .update(this.cliente)
      .subscribe((cliente: Cliente) => {
        this.router.navigate(['/clientes']);
        swal.fire({
          title: 'Actualizar cliente',
          html: `Cliente ${this.cliente.nombre} actualizado con éxito`,
          type: 'success',
          timer: 2500
        });
      });
  }

}
