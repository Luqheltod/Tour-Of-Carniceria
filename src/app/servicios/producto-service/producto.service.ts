import { Injectable } from '@angular/core';
import { PRODUCTOS } from 'src/app/modelos/productos-muestra';
import { Producto } from 'src/app/modelos/producto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

getProductos():Observable<Producto[]>{
  const productos = of(PRODUCTOS);
  return productos;
}

}
