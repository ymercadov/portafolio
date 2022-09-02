import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})

export class InfopaginaService {

  info: infoPagina= {}
  cargada = false;

  constructor(private http: HttpClient) { 

    //console.log('Servicio inicializado y listo para utilizar..!!!!');
    //leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
        .subscribe((resp: infoPagina) => {
           console.log(resp);
           this.cargada = true;
           this.info = resp;
           //console.log(resp['nombre_corto'])
        });

        //retornar entexto
        this.http.get('assets/data/data-pagina.json',{responseType:'text'})
        .subscribe(resp => {
           console.log(resp);        
        });

         //retornar HttpResponse
         this.http.get('assets/data/data-pagina.json',{observe: 'response'})
         .subscribe(resp => { // data is of type HttpResponse<Object>
          console.log(resp.headers.get('X-Custom-Header'));
          console.log(resp.body['someProperty']); //response.body is a JSON         
         });

  

  }
}
