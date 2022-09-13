import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
   
  cargando = true;
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  constructor(private http: HttpClient) { 
    this.CargarProductos();
  }

  private CargarProductos()
  {
    //retornar valores asincrono
    return new Promise<void>((resolve, reject) => {      
      this.http.get('https://angular-html-6a672-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[]) =>{
       this.productos = resp;  
       this.cargando = false;      
        /*setTimeout(() => {
          this.cargando = false;
        }, 2000);*/        
        //Para inricar que la promise termino de forma exitos
        resolve();
      });

    });
  }
  // ctrl + } : agrega comentario(s) de la(s) linea(s) al inicio del texto 
  getProducto(id:string)
  {
    return this.http.get(`https://angular-html-6a672-default-rtdb.firebaseio.com/productos/${ id }.json`)
  }

  BuscarProducto(termino : string)
  {
    if (this.productos.length === 0){
      // this.CargarProductos().then((result) => {  }).catch((err) => {});
      this.CargarProductos().then((result) => {
        //Se ejecuta despues de tener los productos
        //Aplicar filtro
        this.filtrarProducto(termino);

      });
    }else{
       //Aplicar filtro
       this.filtrarProducto(termino);
    }
  }

  private filtrarProducto(termino:string){    
    this.productosFiltrados = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach(prod => {
      const tituloLowerCase = prod.titulo.toLocaleLowerCase();
      if (prod.categoria.indexOf(termino) >= 0 || tituloLowerCase.indexOf(termino) >= 0)
      {
        this.productosFiltrados.push(prod)
      }
    });
  }
}
