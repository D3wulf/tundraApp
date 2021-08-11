import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { Empresa } from '../interfaces/empresas.interface';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor( private http:HttpClient) {

    this.cargaContenido();
   }

  cargaContenido(){


  this.http.get(`${url}/empresas`).subscribe((resp)=>{

    
  })
  }
  // pongo el tipado para la comparativa
  // buscar(termino:string){

  //   return this.http.get(`http://localhost:3000/api/buscar/${termino}`).pipe(
  //     map( (resp:any)=> resp.empresa)
  //   )
    

    
    
  // }
}
