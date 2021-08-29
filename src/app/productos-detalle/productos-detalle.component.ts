import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../modelos/producto';

@Component({
  selector: 'app-productos-detalle',
  templateUrl: './productos-detalle.component.html',
  styleUrls: ['./productos-detalle.component.css']
})
export class ProductosDetalleComponent implements OnInit {

  @Input()producto?:Producto;

  constructor() { }

  ngOnInit(): void {
  }

}
