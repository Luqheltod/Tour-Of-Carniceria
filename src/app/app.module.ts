import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductosDetalleComponent } from './productos-detalle/productos-detalle.component';
import { MensajesComponent } from './mensajes/mensajes.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ProductosDetalleComponent,
    MensajesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
