import { Injectable } from '@angular/core';
import { PRODUCTOS } from 'src/app/modelos/productos-muestra';
import { Producto } from 'src/app/modelos/producto';
import { Observable, of } from 'rxjs';
import { MensajeService } from '../mensajes-service/mensaje.service';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private mensajeService : MensajeService) { }

getProductos():Observable<Producto[]>{
  const productos = of(PRODUCTOS);
  this.mensajeService.add('ProductoService: productos obtenidos');
  return productos;
}

}
