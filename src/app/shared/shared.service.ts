import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor( private http:HttpClient) {

    this.cargaContenido();
   }

  cargaContenido(){


    this.http.get('http://localhost:3000/api/empresas').subscribe((resp)=>{

    
    })
  }
}
