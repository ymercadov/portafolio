import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private routes:ActivatedRoute,
              public productosService:ProductosService  ) { }

  ngOnInit() {

    this.routes.params
    .subscribe(para =>{
      //console.log(para['termino']);
      this.productosService.BuscarProducto(para['termino']);

    })
  }

}
