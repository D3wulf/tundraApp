import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Empresa } from '../interfaces/empresas.interface';
import { map } from 'rxjs/operators';
import { Mensaje } from '../models/mensaje.model';


const url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private http: HttpClient) {

    this.cargarEmpresas();
   }


  cargarEmpresas(){

    return this.http.get<Empresa[]>(`${url}/empresas`).pipe(
      map((resp:any)=> resp.empresas)
    );
    
  }


   //Para la pagina usuarios// para paginacion, ver usuario service
  //  cargarMensajes(){
  //   const miUrl = `${url}/mensajes`;
  //   return this.http.get<any>(miUrl)
  //   .pipe(
  //     map( (resp: 
  //       { ok:boolean, Mensajes:Mensaje[] }) => 
  //       resp.Mensajes
        
  //       )
  //   );
  //  }

   crearMensaje(datos:Mensaje){


    //Recordar post ( url, datos, headers)
    const miUrl = `${url}/mensajes`;
    return this.http.post(miUrl,datos);
    
   }

  //  borrarMensaje(id:string){


  //   //Recordar post ( url, datos, headers)
  //   const miUrl = `${url}/mensajes/${id}`;
  //   return this.http.delete(miUrl);
    
  //  }
}
