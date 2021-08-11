import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Empresa } from 'src/app/interfaces/empresas.interface';
import { PagesService } from '../pages.service';


@Component({
  selector: 'app-verempresas',
  templateUrl: './verempresas.component.html',
  styles: [
  ]
})
export class VerempresasComponent implements OnInit {

 empresa!:Empresa;

 empresaSeleccionada:Empresa[]=[]

  constructor( private activatedRoute: ActivatedRoute,
    private pagesService:PagesService,private router:Router) { }

  ngOnInit(): void {
    //debe coincidir= con el termino de busqueda? en el router?
    this.activatedRoute.params.subscribe( ({empresa})=>{
    
    console.log(empresa);

     this.buscar(empresa);
     this.empresaSeleccionada= [];
     
      
    })

  }

  buscar(termino:string){



    this.pagesService.BuscarEmpresa(termino).pipe(
      map((resp:any)=> resp.empresa),
      //tap(console.log)
    )
    
    .subscribe((empresa)=>{

     const {nombre} = empresa[0]
      //console.log(empresa);
     this.empresaSeleccionada.push(empresa[0])


     


    })


  }
}

  



  


