import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Empresa } from '../interfaces/empresas.interface';
import { map, tap } from 'rxjs/operators';
import { Mensaje } from '../models/mensaje.model';
import { loginForm } from '../interfaces/login-form.interface';
import { Observable } from 'rxjs';


const url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PagesService {


  // para el can activate creamos la variable de tipo loginform (interface)
  private _login!:loginForm | undefined;

  //creamos un getter para que devuelva todo lo que haya en _login, pero que hay?
  // pasamos al login y necesitamos la respuesta del backend y como la envia en el subscribe,
  // debemos sacarla antes, y para eso está el tap, con eso ya cogemos la respuesta y 
  get loginGuard():loginForm
  {
    
    return{...this._login!}}
  //-----------------------GUARDS--------------------------------//
  constructor(private http: HttpClient) {

    this.cargarEmpresas();
   }

  cargarEmpresas(){

    return this.http.get<Empresa[]>(`${url}/empresas`).pipe(
      map((resp:any)=> resp.empresas)
    );
    
  }

  //-------------- Mensaje de contacto ------------//

   crearMensaje(datos:Mensaje){

    //Recordar post ( url, datos, headers)
    const miUrl = `${url}/mensajes`;
    return this.http.post(miUrl,datos);
    
   }

   //-------------- Login ----------------//

   login(formdata:loginForm){
     // 1º la url
    const miUrl = `${url}/login`;
    this._login=formdata;
    return this.http.post(miUrl,formdata).pipe(
      //para hacer cosas antes del subscribe, el resp sera igual que el que se reciba en el subscribe
      tap((loginUsuario:any)=>

        this._login= loginUsuario

      )
    );
    
   }

   BuscarEmpresa(termino:string):Observable<Empresa>{

    return this.http.get<Empresa>(`${url}/buscar/${termino}`)
    .pipe(
      map((empresa)=> empresa ))
      ;
    

   }
  }

  
