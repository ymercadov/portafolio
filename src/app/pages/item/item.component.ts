import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/productos-descripcion.interface';
//import { Console } from 'console';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  productoDescripcion: ProductoDescripcion;
  id:string;
  constructor(private route: ActivatedRoute,
             protected productosService: ProductosService) { }

  ngOnInit() {
    this.route.params
    .subscribe(parametros => 
      {
         //console.log(parametros);
         //console.log(parametros['id']); 
        this.productosService.getProducto(parametros['id'])
        .subscribe((resp:ProductoDescripcion) =>{
          this.productoDescripcion = resp;
          this.id = parametros['id'];
          //console.log(this.productoDescripcion);
        })
      });
  }

}
