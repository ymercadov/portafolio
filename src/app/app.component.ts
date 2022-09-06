import { Component } from '@angular/core';
import { InfopaginaService } from './services/infopagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public infoPageService:InfopaginaService,
              public productosService:ProductosService){

  }
}
