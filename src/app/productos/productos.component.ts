import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelos/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  producto : Producto = {
    id: 1,
    nombre : 'Salchichon de Cocodrilo',
    descripcion : "100% hecho unicamente de cocodrilos que comen cocodrilos que comen cocodrilos que comen personas",
    origen : "Egipto"


  }

  constructor() { }

  ngOnInit(): void {
  }

}
