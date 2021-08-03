
import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/interfaces/empresas.interface';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styles: [
   

  ]
})
export class EmpresasComponent implements OnInit {

   public misEmpresas:Empresa[]= [];
   cambioOrden= "image left";
  


  


  constructor( private pagesService: PagesService) {}
  ngOnInit(): void {
     this.cargaEmpresas();
     

  }

  cargaEmpresas(){

    this.pagesService.cargarEmpresas().subscribe( empresas =>{   

      this.misEmpresas = empresas;
      console.log( this.misEmpresas);
      console.log(typeof empresas);
      
      
     })
  }

}
