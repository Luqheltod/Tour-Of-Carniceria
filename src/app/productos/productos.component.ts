import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelos/producto';
import { PRODUCTOS } from '../modelos/productos-muestra';
import { MensajeService } from '../servicios/mensajes-service/mensaje.service';

import { ProductoService } from '../servicios/producto-service/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

productos :Producto[] =[];

productoSeleccionado?:Producto;
 
onSelect(producto : Producto) :void {
  this.productoSeleccionado = producto;
  this.mensajeService.add(`ProductosComponent: Id del Producto Seleccionado =${producto.id}`);
}

  constructor(private productoService : ProductoService, private mensajeService : MensajeService ) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() : void{
   this.productoService.getProductos().subscribe(productos=> this.productos = productos);
  }
}
