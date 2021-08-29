import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelos/producto';
import { PRODUCTOS } from '../modelos/productos-muestra';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

productos = PRODUCTOS;

productoSeleccionado?:Producto;
 
onSelect(producto : Producto) :void {
  this.productoSeleccionado = producto;
}

  constructor() { }

  ngOnInit(): void {
  }

}
