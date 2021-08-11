import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  termino:string = '';

  



  constructor(private sharedService:SharedService, private router:Router) { }

  ngOnInit(): void {
  }

  buscar(termino:string){

    if(termino.length=== 0 ){
      return;
    }

    this.router.navigateByUrl(`/empresas/${termino}`)

  }




    

  


}
