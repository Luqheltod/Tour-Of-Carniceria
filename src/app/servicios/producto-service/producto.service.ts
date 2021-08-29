import { Injectable } from '@angular/core';
import { PRODUCTOS } from 'src/app/modelos/productos-muestra';
import { Producto } from 'src/app/modelos/producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

getProductos():Producto[]{
  return PRODUCTOS;
}

}
